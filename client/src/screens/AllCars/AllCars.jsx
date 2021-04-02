import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../components/Modal";

export default function AllCars(props) {
  const [open, handleOpen] = useState(false);
  const { cars, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>All Cars</h3>
      {cars.map((food) => (
        <React.Fragment key={car.id}>
          <Link to={`/cars/${car.id}`}>
            <p>{car.make}</p>
          </Link>
          {currentUser?.id === car.user_id && (
            <>
              <Link to={`/cars/${car.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleOpen(car.id)}>delete</button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to="/cars/new">
        <button>Create New Car</button>
      </Link>
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
