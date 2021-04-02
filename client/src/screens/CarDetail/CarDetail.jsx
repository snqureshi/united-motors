import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCar } from "../../services/cars";

export default function CarDetail(props) {
  const [currentCar, setCurrentCar] = useState(null);
  // const [selectedModel, setSelectedModel] = useState("");
  const { id } = useParams();
  // const { model } = props;

  useEffect(() => {
    const fetchOneCar = async () => {
      const carData = await getOneCar(id);
      setCurrentCar(carData);
    };
    fetchOneCar();
  }, []);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedModel(value);
  // };

  // const handleSubmit = async () => {
  //   const carData = await add(id, selectedModel);
  //   setCurrentCar(carData);
  // };

  return (
    <div>
      <h3>{currentCar?.make}</h3>
      {currentCar?.models.map((model) => (
        <p key={model.id}>{model.name}</p>
      ))}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <select onChange={handleChange} defaultValue="default">
          <option value="default" disabled>
            -- Select a model --
          </option>
          {models.map((model) => (
            <option value={model.id}>{model.name}</option>
          ))}
        </select>
        <button>add</button>
      </form> */}
    </div>
  );
}
