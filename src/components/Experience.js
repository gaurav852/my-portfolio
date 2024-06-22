import React from "react";
import "./About.css";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="main-exp-content-area">
      <Card
        title="Experience"
        text={`<b>Security Delivery Associate</b> <br />
            Accenture [Sept 2023 - current] <br />
            Gurugram, India <br/>
            <p>During my internship at Accenture as a Cybersecurity Intern, I had the opportunity 
            to contribute to enhancing client security measures. My role focused on managing application security, 
            where I diligently handled aspects such as login mechanisms, access controls, user rights management, 
            sign-in protocols, access reviews, and server security. Working closely with experienced professionals, 
            I gained practical insights into addressing the daily security challenges faced by Accenture's diverse clientele. 
            Throughout the internship, I was supported by a dedicated mentor who guided me in developing essential skills and 
            understanding critical processes in cybersecurity. This experience not only enriched my technical knowledge but also 
            equipped me with valuable problem-solving abilities essential for the industry.</p>
            <hr />
            
            <b>Cyber Security Intern</b> <br />
            Accenture [May 2023 - August 2023] <br />
            Banglore, India <br/>
            <p>During my internship at Accenture as a Cybersecurity Intern, I had the opportunity 
            to contribute to enhancing client security measures. My role focused on managing application security, 
            where I diligently handled aspects such as login mechanisms, access controls, user rights management, 
            sign-in protocols, access reviews, and server security. Working closely with experienced professionals, 
            I gained practical insights into addressing the daily security challenges faced by Accenture's diverse clientele. 
            Throughout the internship, I was supported by a dedicated mentor who guided me in developing essential skills and 
            understanding critical processes in cybersecurity. This experience not only enriched my technical knowledge but also 
            equipped me with valuable problem-solving abilities essential for the industry.</p>
            `}
      />
    </div>
  );
};

export default Experience;
