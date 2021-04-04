import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../AllCars/AllCars.css";
import Search from "../../components/Search";

export default function AllCars(props) {
  const [queriedCars, setQueriedCars] = useState([]);
  const { cars } = props;

  const handleSearch = (e) => {
    const filteredCars = cars.filter((car) =>
      car.make.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedCars(filteredCars);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <div className="all-page">
      <div className="all-heading">Shop Our Inventory</div>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
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
