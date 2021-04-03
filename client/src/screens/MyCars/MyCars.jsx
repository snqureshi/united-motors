import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserCars } from "../../services/cars";
import "../MyCars/MyCars.css";

export default function MyCars() {
  const [myCars, setMyCars] = useState([]);

  useEffect(() => {
    const fetchMyCars = async () => {
      const myCarData = await getUserCars();
      setMyCars(myCarData);
    };
    fetchMyCars();
  }, []);

  return (
    <div>
      <h3>My Cars</h3>
      <div className="my-car-container">
        {myCars.map((myCar) => (
          <React.Fragment key={myCar.id}>
            <Link to={`/cars/${myCar.id}`}>
              <div className="my-each-car">
                <img
                  className="my-car-image"
                  src={myCar.img_url}
                  alt={myCar.make}
                />
                <div className="my-year">{myCar.year}</div>
                <div className="my-make">{myCar.make}</div>
                <div className="my-model">{myCar.model}</div>
                <div className="my-price">${myCar.price}</div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
