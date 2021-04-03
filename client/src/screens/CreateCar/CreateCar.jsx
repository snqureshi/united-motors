import { useState } from "react";

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>List a New Car</h3>
      <label>
        Image URL:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <label>
        Make:
        <select required name="make" onChange={handleChange}>
          {makes.map((make, index) => (
            <option key={index} value={make.name} name="make">
              {make.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Model:
        <select required name="model_id" onChange={handleChange}>
          {models.map((model, index) => (
            <option key={index} value={model.id} name="model_id">
              {model.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Color:
        <input type="text" name="color" value={color} onChange={handleChange} />
      </label>
      <label>
        Year:
        <input type="number" name="year" value={year} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </label>
      <label>
        Mileage
        <input
          type="number"
          name="mileage"
          value={mileage}
          onChange={handleChange}
        />
      </label>
      <label>
        Body type:
        <input type="text" name="body" value={body} onChange={handleChange} />
      </label>
      <label>
        Details:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <button>Create A New Listing</button>
    </form>
  );
}
