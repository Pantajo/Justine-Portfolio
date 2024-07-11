import React from 'react';
import './Contacts.css'; // Import CSS file for styling
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import FontAwesome icons

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p className="info">pantajojustine5@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <p className="info">09106943865</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <p className="info">Brgy. Tapi Kabankalan City Negros Occidental</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
