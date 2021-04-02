import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import AllCars from "../screens/AllCars/AllCars";
import AllMakes from "../screens/AllMakes/AllMakes";
import AllModels from "../screens/AllModels/AllModels";
import CarDetail from "../screens/CarDetail/CarDetail";
import CreateCar from "../screens/CreateCar/CreateCar";
import UpdateCar from "../screens/UpdateCar/UpdateCar";

import { getAllMakes } from "../services/makes";
import { getAllModels } from "../services/models";
import { destroyCar, getAllCars, postCar, putCar } from "../services/cars";

export default function MainContainer(props) {
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);
  const [cars, setCars] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchModels = async () => {
      const modelData = await getAllModels();
      setModels(modelData);
    };
    fetchModels();
  }, []);

  useEffect(() => {
    const fetchMakes = async () => {
      const makeData = await getAllMakes();
      setMakes(makeData);
    };
    fetchMakes();
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      const carData = await getAllCars();
      setCars(carData);
    };
    fetchCars();
  }, []);

  const handleCreate = async (carData) => {
    const newCar = await postCar(carData);
    setCars((prevState) => [...prevState, newCar]);
    history.push("/cars");
  };

  const handleUpdate = async (id, carData) => {
    const updatedCar = await putCar(id, carData);
    setCars((prevState) =>
      prevState.map((car) => {
        return car.id === Number(id) ? updatedCar : car;
      })
    );
    history.push(`/cars/${id}`);
  };

  const handleDelete = async (id) => {
    await destroyCar(id);
    setCars((prevState) => prevState.filter((car) => car.id !== id));
  };

  return (
    <Switch>
      <Route path="/models">
        <AllModels models={models} />
      </Route>
      <Route path="/makes">
        <AllMakes makes={makes} />
      </Route>
      <Route path="/cars/new">
        <CreateCar handleCreate={handleCreate} makes={makes} models={models} />
      </Route>
      <Route path="/cars/:id/edit">
        <UpdateCar
          cars={cars}
          handleUpdate={handleUpdate}
          makes={makes}
          models={models}
        />
      </Route>
      <Route path="/cars/:id">
        <CarDetail
          cars={cars}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path="/cars">
        <AllCars cars={cars} />
      </Route>
    </Switch>
  );
}
