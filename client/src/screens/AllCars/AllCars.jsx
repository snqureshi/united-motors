import React from "react";
import { Link } from "react-router-dom";
import "../AllCars/AllCars.css";

export default function AllCars(props) {
  const { cars } = props;
  return (
    <div className="all-page">
      <div className="all-heading">Shop Our Inventory</div>
      <div className="all-car-container">
        {cars.map((cars) => (
          <React.Fragment key={cars.id}>
            <Link to={`/cars/${cars.id}`} className="all-link">
              <div className="each-car">
                <img
                  className="all-car-image"
                  src={cars.img_url}
                  alt={cars.make}
                />
                <div className="all-details">
                  <div className="all-make-model">
                    {cars.make} {cars.model}
                  </div>
                  <div className="all-year">{cars.year}</div>
                  <div className="all-price">${cars.price}</div>
                </div>
                <button className="all-button">Learn More</button>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
