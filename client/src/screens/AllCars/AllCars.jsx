import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import "../AllCars/AllCars.css";

export default function AllCars(props) {
  const [open, handleOpen] = useState(false);
  const { cars, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>All Cars</h3>
      <div className="all-car-container">
        {cars.map((cars) => (
          <React.Fragment key={cars.id}>
            <Link to={`/cars/${cars.id}`}>
              <img
                className="all-car-image"
                src={cars.img_url}
                alt={cars.make}
              />
              <div className="all-year">{cars.year}</div>
              <div className="all-make">{cars.make}</div>
              <div className="all-model">{cars.model}</div>
              <div className="all-price">${cars.price}</div>
            </Link>
            {currentUser?.id === cars.user_id && (
              <>
                <Link to={`/cars/${cars.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleOpen(cars.id)}>delete</button>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <br />
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
