import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../AllCars/AllCars.css";

export default function AllCars(props) {
  const [search, setSearch] = useState("");
  const { cars } = props;

  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(search.toLowerCase()) ||
      car.model.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="all-page">
      <div className="all-heading">Shop Our Inventory</div>
      <input
        className="search-input"
        type="text"
        placeholder="Search by Make or Model"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="all-car-container">
        {cars &&
          filteredCars.map((cars) => (
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
                      {cars.year} {cars.make} {cars.model.name}
                    </div>
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
