import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneCar } from "../../services/cars";
import Modal from "../../components/Modal";
import "./CarDetail.css";

export default function CarDetail(props) {
  const [currentCar, setCurrentCar] = useState([]);
  const { id } = useParams();
  const [open, handleOpen] = useState(false);
  const { handleDelete, currentUser } = props;

  useEffect(() => {
    const fetchOneCar = async () => {
      const carData = await getOneCar(id);
      setCurrentCar(carData);
    };
    fetchOneCar();
  }, []);

  return (
    <div className="details-page">
      <div className="details-heading">Car Details</div>
      <div className="details-content">
        <img
          className="details-car-image"
          src={currentCar.img_url}
          alt={currentCar.make}
        />
        <div className="details-container">
          <div>Make: {currentCar.make}</div>
          <div>Model: {currentCar.model && currentCar.model.name}</div>
          <div>Year: {currentCar.year}</div>
          <div>Mileage: {currentCar.mileage}</div>
          <div>Color: {currentCar.color}</div>
          <div>Body Type: {currentCar.body}</div>
          <div>Description: {currentCar.description}</div>
          <div>Price: ${currentCar.price}</div>
        </div>
      </div>
      {
        <div className="button-container">
          {currentUser?.id === currentCar.user_id && (
            <>
              <Link to={`/cars/${currentCar.id}/edit`}>
                <button className="sign-in-button">Edit</button>
              </Link>
              <button
                className="sign-in-button"
                onClick={() => handleOpen(currentCar.id)}
              >
                Delete
              </button>
            </>
          )}
          {open && (
            <Modal
              open={open}
              handleOpen={handleOpen}
              handleDelete={handleDelete}
            />
          )}
        </div>
      }
    </div>
  );
}
