import React from "react";
import "./ProfileImage.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.jpeg";

const ProfileImage = () => {
  return (
    <div className="main-frame">
      <div className="profile-image-container">
        <img src={profileImage} alt="profile image" className="profile-image" />
        <div className="text-area-container">
          <h5 className="text-item">Hello, i'm </h5>
          <h2 className="text-item">Gaurav Kumar Singh</h2>
          <h4 className="text-item">Software Engineer</h4>
          <div className="button-area-1">
            <button className="button-1">Download CV</button>
            <button className="button-2">Contact info</button>
          </div>
          <div className="button-area-2">
            <FaLinkedin className="linkein-icon" size={35} onClick={"gau"} />
            <FaGithub className="github-icon" size={35} onClick={"gau"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
