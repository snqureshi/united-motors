import { useState } from "react";
import "./CreateCar.css";

export default function CreateCar(props) {
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
  const { handleCreate, models, makes } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-page">
      <div className="form-heading">Add to Your Inventory</div>
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
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
            className="create-drop"
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
          Model:
          <select
            className="create-drop"
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
          Body Type:
          <select
            className="create-drop"
            type="text"
            name="body"
            value={body}
            onChange={handleChange}
          >
            <option value={body} name="body">
              SUV
            </option>
            <option value={body} name="body">
              Full-Size Sedan
            </option>
            <option value={body} name="body">
              Mid-Size Sedan
            </option>
            <option value={body} name="body">
              Compact Sedan
            </option>
            <option value={body} name="body">
              Subcompact Sedan
            </option>
            <option value={body} name="body">
              Coupe
            </option>
            <option value={body} name="body">
              Convertible
            </option>
            <option value={body} name="body">
              Station Wagon
            </option>
            <option value={body} name="body">
              Hatchback
            </option>
            <option value={body} name="body">
              Minivan
            </option>
            <option value={body} name="body">
              Pick-Up Truck
            </option>
          </select>
        </label>
        <label>
          Details:
          <textarea
            className="create-text"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <button className="sign-in-button">Create A New Listing</button>
      </form>
    </div>
  );
}
