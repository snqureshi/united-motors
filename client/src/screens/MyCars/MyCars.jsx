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

  console.log(myCars);

  return (
    <div>
      <h3>My Cars</h3>
      <div className="my-car-container">
        {myCars.map((myCar) => (
          <React.Fragment key={MyCars.id}>
            {/* <Link to={`/user_cars/${id}`}> */}
            <div className="each-car">
              <img
                className="my-car-image"
                src={myCars.img_url}
                alt={myCars.make}
              />
              <div className="all-year">{myCars.year}</div>
              <div className="all-make">{myCars.make}</div>
              <div className="all-model">{myCars.model}</div>
              <div className="all-price">${myCars.price}</div>
            </div>
            {/* </Link> */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
