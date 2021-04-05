import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserCars } from "../../services/cars";

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
    <div className="my-page">
      <div className="all-heading">My Cars</div>
      <div className="all-car-container">
        {myCars.map((myCar) => (
          <React.Fragment key={myCar.id}>
            <Link to={`/cars/${myCar.id}`}>
              <div className="each-car">
                <img
                  className="all-car-image"
                  src={myCar.img_url}
                  alt={myCar.make}
                />
                <div className="all-year">{myCar.year}</div>
                <div className="all-make-model">
                  {myCar.make} {myCar.model}
                </div>
                <div className="all-price">${myCar.price}</div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
