import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCar } from "../../services/cars";

export default function CarDetail(props) {
  const [currentCar, setCurrentCar] = useState([]);
  const { id } = useParams();
  const { cars } = props;

  useEffect(() => {
    const fetchOneCar = async () => {
      const carData = await getOneCar(id);
      setCurrentCar(carData);
    };
    fetchOneCar();
  }, []);

  console.log(currentCar);

  return (
    <div>
      <h3>Car Details</h3>
      <img
        className="all-car-image"
        src={currentCar.img_url}
        alt={currentCar.make}
      />
    </div>
  );
}
