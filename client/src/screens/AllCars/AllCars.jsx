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
              <div className="each-car">
                <img
                  className="all-car-image"
                  src={cars.img_url}
                  alt={cars.make}
                />
                <div className="all-year">{cars.year}</div>
                <div className="all-make">{cars.make}</div>
                <div className="all-model">{cars.model}</div>
                <div className="all-price">${cars.price}</div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
