import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateCar(props) {
  const [formData, setFormData] = useState({
    img_url: "",
    make: "",
    model_id: "",
    color: "",
    year: "",
    mileage: "",
    price: "",
    body: "",
    description: "",
  });
  const {
    img_url,
    make,
    model_id,
    color,
    year,
    mileage,
    price,
    body,
    description,
  } = formData;
  const { id } = useParams();
  const { cars, handleUpdate, makes, models } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const currentCar = cars.find((car) => car.id === Number(id));
      setFormData({
        img_url: currentCar.img_url,
        make: currentCar.make,
        model_id: currentCar.model_id,
        color: currentCar.color,
        year: currentCar.year,
        mileage: currentCar.mileage,
        price: currentCar.price,
        body: currentCar.body,
        description: currentCar.description,
      });
    };
    if (cars.length) {
      prefillFormData();
    }
  }, [cars, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="update-page">
      <div className="all-heading">Update Your Listing</div>
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <label>
          Image URL:
          <input
            className="create-input"
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Make:
          <select
            className="create-input"
            required
            name="make"
            onChange={handleChange}
          >
            {makes.map((make, index) => (
              <option key={index} value={make.name} name="make">
                {make.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Color:
          <input
            className="create-input"
            type="text"
            name="color"
            value={color}
            onChange={handleChange}
          />
        </label>
        <label>
          Model:
          <select
            className="create-input"
            required
            name="model_id"
            onChange={handleChange}
          >
            {models.map((model, index) => (
              <option key={index} value={model.id} name="model_id">
                {model.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Year:
          <input
            className="create-input"
            type="number"
            name="year"
            value={year}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            className="create-input"
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </label>
        <label>
          Mileage
          <input
            className="create-input"
            type="number"
            name="mileage"
            value={mileage}
            onChange={handleChange}
          />
        </label>
        <label>
          Body type:
          <input
            className="create-input"
            type="text"
            name="body"
            value={body}
            onChange={handleChange}
          />
        </label>
        <label>
          Details:
          <input
            className="create-input"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <button className="sign-in-button">Submit</button>
      </form>
    </div>
  );
}
