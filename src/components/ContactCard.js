import React from "react";
import "./ContactCard.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactCard = () => {
  return (
    <div className="contactCard">
      <div className="button-area-2">
        <div className="contact-email-area">
        <IoIosMail className="email-icon" size={35} onClick={"gau"} />
        <h3>Email</h3>
        <h4>xgaurav2000@gmail.com</h4>
        </div>
        <FaLinkedin className="linkein-icon" size={35} onClick={"gau"} /><h3>LinkedIn</h3>
        <FaGithub className="github-icon" size={35} onClick={"gau"} /><h3>Github</h3>
      </div>
    </div>
  );
};

export default ContactCard;
