import React from "react";
import "./Contact.css";
import MapContainer from "../../containers/MapContainer";

function Contact() {
  return (
    <div className="contact-container">
      <div className="all-heading"> Contact Us </div>
      <div className="contact-details">
        <div contact-blurb>
          Welcome to United Motors! Located in Deer Park, NY, we are your one
          stop shop for all your vehicle needs. Whether you're looking for a new
          car, an used car, or servicing for your car, we can take care of it
          all!
        </div>
        <br />
        <div className="contact-address">
          &#127968; 1080 Long Island Ave, Deer Park, NY 11729
        </div>
        <MapContainer />
        <br />
        <div className="contact-number">&#128241; 631-522-1200</div>
        <br />
        <div className="contact-email">
          &#128231; unitedmotors_cars@gmail.com
        </div>
        <br />
      </div>
    </div>
  );
}

export default Contact;
