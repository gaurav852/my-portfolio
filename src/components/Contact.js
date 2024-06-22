import React from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="main-contact-content-area">
      <div className="contact-page-top-heading">
      <h5 className="small-heading">Get in touch</h5>
      <h1 className="about-me">Contact Me</h1> 
      </div>
      <ContactCard />
    </div>
  );
};

export default Contact;
