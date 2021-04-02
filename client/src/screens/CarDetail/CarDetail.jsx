import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneCar } from "../../services/cars";
import Modal from "../../components/Modal";

export default function CarDetail(props) {
  const [currentCar, setCurrentCar] = useState([]);
  const { id } = useParams();
  const [open, handleOpen] = useState(false);
  const { cars, handleDelete, currentUser } = props;

  useEffect(() => {
    const fetchOneCar = async () => {
      const carData = await getOneCar(id);
      setCurrentCar(carData);
    };
    fetchOneCar();
  }, []);

  return (
    <div>
      <h3>Car Details</h3>
      <img
        className="all-car-image"
        src={currentCar.img_url}
        alt={currentCar.make}
      />
      <div className="details-container">
        <div>{currentCar.make}</div>
        <div>{currentCar.model && currentCar.model.name}</div>
        <div>{currentCar.year}</div>
        <div>{currentCar.mileage}</div>
        <div>{currentCar.color}</div>
        <div>{currentCar.type}</div>
        <div>{currentCar.description}</div>
      </div>
      <div className="details-price">{currentCar.price}</div>
      {
        <React.Fragment>
          {currentUser?.id === cars.user_id && (
            <>
              <Link to={`/cars/${cars.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleOpen(cars.id)}>delete</button>
            </>
          )}
          {open && (
            <Modal
              open={open}
              handleOpen={handleOpen}
              handleDelete={handleDelete}
            />
          )}
        </React.Fragment>
      }
    </div>
  );
}
