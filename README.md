## Overview

_**United Motors** is a full stack app using "React on Rails" stack that is designed to be utilized by a local car dealership. United Motors is a local car dealership in Deer Park, NY that has been around since 2006. Due to Covid19 and the economic recession that followed, they are in dire need of a website that will allow potential customers to browse through their inventory online from the safety of their home. Admins and employees of United Motors will be able to add, update and delete cars as their collection changes._
<br>

## MVP

_The **United Motors** App will allow users to browse through all available cars in the current inventory, look at individual car details. They can narrow their search by car makes and models. Employees of United Motors will be able to add new cars, make changes to their existing cars and delete cars from the inventory as they are sold._
<br>

### Goals

- _Create models to accurately depict the ERD_
- _Create database with CRUD functionality using Ruby-on-Rails_
- _Utilize RESTful JSON endpoints_
- _Implement User Authentication and Association for cars_
- _Render different routes based on user credentials on the frontend_
- _Render data using functional and class React components_
- _Use CSS to create the wireframes_
- _Implement search feature by makes and models_
- _Responsive design on mobile and desktop devices_
  <br>

### Libraries and Dependencies

|     Library     | Description                                                         |
| :-------------: | :------------------------------------------------------------------ |
|      React      | _Front End Framework for client view_                               |
|  React Router   | _Render different routes based on user credentials on the frontend_ |
|      Axios      | _Access and get data back from the API_                             |
|  Ruby On Rails  | _Back end framework to design and manage the database_              |
| React Bootstrap | _Hamburger Menu for mobile view_                                    |
|   jwt/bcrypt    | _User Authorization for sign-up/sign-in_                            |
| google maps api | _Rendering Map on the contact page_                                 |

<br>

### Client (Front End)

#### Wireframes

[AdobeXD Link](https://xd.adobe.com/view/ceda8ceb-1c68-4d63-9839-ad515ba909c2-9b89/)

#### Component Tree

[Component Tree](https://whimsical.com/unitedmotorsapp-JZwDFHKaQf7bqiEU6DYUQ8)

#### Component Architecture

```structure

src
|__ components/
  |__ Modal.jsx/
|__ containers/
  |__ MainContainer.jsx/
  |__ MapContainer.jsx/
|__ layout/
  |__ Layout.jsx/
    |__ Nav.jsx/
    |__ Footer.jsx/
|__ screens/
  |__ AllCars.jsx/
  |__ MyCars.jsx/
  |__ CarDetail.jsx/
  |__ UpdateCar.jsx/
  |__ CreateCar.jsx/
  |__ AllModels.jsx/
  |__ AllMakes.jsx/
  |__ SignUp.jsx/
  |__ SignIn.jsx/
|__ services/
  |__api-config.js
  |__auth.js
  |__users.js
  |__cars.js
  |__appointments.js
  |__makes.js
  |__models.js
```

#### Time Estimates

| Task                                                       | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Initial Setup (Setting up models and migration files/Cors) |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| Create Seed Data                                           |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Create CRUD Actions in controller files for Cars           |    H     |     2 hrs      |    1.5 hrs    |   1.5 hrs   |
| Create CRUD Actions in controller files for Models         |    H     |      1 hr      |    0.5 hrs    |   0.5 hrs   |
| Create CRUD Actions in controller files for Makes          |    H     |      1 hr      |    0.5 hrs    |   0.5 hrs   |
| Create CRUD Actions in controller files for Users          |    H     |    2.5 hrs     |    0.5 hrs    |   0.5 hrs   |
| Set up Authentication controller                           |    H     |      1 hr      |      1hr      |    1 hr     |
| Test backend routes with Postman                           |    H     |      1 hr      |     3 hrs     |    3 hrs    |
| Setup React Components                                     |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Connect and test backend/frontend relationship in services |    H     |     3 hrs      |     1 hr      |    1 hr     |
| Build out frontend CRUD in main container for cars         |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Build out sign up and sign in screens                      |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Build out and test all cars screen                         |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Build out and test car details screen                      |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Build out and test update car screen                       |    H     |     2 hrs      |     1 hr      |    1 hr     |
| Build out and test create car screen                       |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Search functionality on Cars Page                          |    M     |     2 hrs      |     1 hr      |    1 hr     |
| Style to replicate wireframes                              |    M     |     6 hrs      |    10 hrs     |    8 hrs    |
| Implement media queries for mobile view                    |    M     |     4 hrs      |     4 hrs     |    4 hrs    |
| Contact Page rendering with google maps                    |    L     |     2 hrs      |     1 hr      |    1 hr     |
| QA all pages                                               |    H     |     2 hrs      |     2 hr      |    2 hr     |
| Total                                                      |          |     51 hrs     |    45 hrs     |   45 hrs    |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1YjpqDdykFT7KNYHOUGVNmwwQF6oshQSJ/view?usp=sharing)
<br>

---

## Post-MVP

- _Allow users to view and create appointments for cars they are interested in_
- _Create a landing page with additional branding and carousal_
- _Additional user association where users can save their favorite cars_
- _Sort functionality by ascending and descending price and mileage_
- _Implement User Restriction so that only verified admins can access crud functionality for cars and other users can only access crud functionality on appoinments_
- _Research websockets to implement chatbox to answer user inquiries in real time_

## Code Showcase

I was able to create an extensive drop down menu by mapping over my make and model tables instead of hard coding them in.

```
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
```
