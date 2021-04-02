import { useState } from "react";

export default function CreateCar(props) {
  const [formData, setFormData] = useState({
    img_url: "",
    make: "",
    model_id: Number,
    color: "",
    year: Number,
    mileage: Number,
    price: Number,
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
  const { handleCreate } = props;

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
        <input type="text" name="make" value={make} onChange={handleChange} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={color} onChange={handleChange} />
      </label>
      <label>
        Model:
        <input
          type="Number"
          name="model"
          value={model_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Year:
        <input type="Number" name="year" value={year} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input
          type="Number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </label>
      <label>
        Mileage
        <input
          type="Number"
          name="mileage"
          value={mileage}
          onChange={handleChange}
        />
      </label>
      <label>
        Body type:
        <input type="text" name="Body" value={body} onChange={handleChange} />
      </label>
      <label>
        Details:
        <input
          type="text"
          name="details"
          value={description}
          onChange={handleChange}
        />
      </label>
      <button>Create A New Listing</button>
    </form>
  );
}
