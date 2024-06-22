import React from "react";
import "./About.css";
import Card from "./Card";

const About = () => {
  return (
    <div className="main-model">
      <h5 className="small-heading">Get To Know More</h5>
      <h1 className="about-me">About Me</h1>
      <div className="content-page-area">
        <h4>
          Hello! I'm Gaurav Kumar Singh, and I have a deep passion for computer
          science and software engineering. My primary interests lie in full
          stack development, where I enjoy building comprehensive solutions that
          span both front-end and back-end technologies. With a keen interest in
          software development, I constantly strive to expand my knowledge and
          skills in this ever-evolving field. I pride myself on my ability to
          adapt to new technologies and methodologies, ensuring that I stay
          current with industry trends and best practices.
        </h4>
        <div className="experience-section">
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
          <Card
            title="Education"
            text={`<b>B.E IN INFORMATION TECHNOLOGY</b> <br />
                Chandigarh University <br />
                July 2023 | Mohali, India <br/>
                CGPA : 8.0/10.0 <br/>
                <hr />
            
                <b>INTERMEDIATE</b> <br />
                Army Public School <br />
                May 2018 | Lucknow, India <br/>
                Percentage : 80 <br/>
                <hr />

                <b>METRICULATION</b> <br />
                Army Public School <br />
                May 2016 | Lucknow, India <br/>
                CGPA : 8.8/10.0 <br/>
                `}
          />
          <Card
            title="Project"
            text={`<b>Gym Tracker using AI</b> <br />
                Live link : <a href="https://www.example.com">Visit Example</a> <br />
                Tech used : React | MongoDB | Express | NodeJS | Javascript | MaterialUI  <br />
                Description : Gym Tracker is an AI-powered web application designed to help users 
                effectively monitor and manage their fitness routines. The platform offers a comprehensive
                solution for tracking workouts, setting fitness goals, and analyzing performance through 
                intuitive and user-friendly interfaces. By leveraging AI, Gym Tracker provides personalized 
                workout recommendations, progress predictions, and insightful analytics to enhance the user's fitness journey. <br/>
                <hr />
            
                <b>Gym Tracker using AI</b> <br />
                Live link : <a href="https://www.example.com">Visit Example</a> <br />
                Tech used : React | MongoDB | Express | NodeJS | Javascript | MaterialUI  <br />
                Description : Gym Tracker is an AI-powered web application designed to help users 
                effectively monitor and manage their fitness routines. The platform offers a comprehensive
                solution for tracking workouts, setting fitness goals, and analyzing performance through 
                intuitive and user-friendly interfaces. By leveraging AI, Gym Tracker provides personalized 
                workout recommendations, progress predictions, and insightful analytics to enhance the user's fitness journey. <br/>
                <hr />

                <b>Gym Tracker using AI</b> <br />
                Live link : <a href="https://www.example.com">Visit Example</a> <br />
                Tech used : React | MongoDB | Express | NodeJS | Javascript | MaterialUI  <br />
                Description : Gym Tracker is an AI-powered web application designed to help users 
                effectively monitor and manage their fitness routines. The platform offers a comprehensive
                solution for tracking workouts, setting fitness goals, and analyzing performance through 
                intuitive and user-friendly interfaces. By leveraging AI, Gym Tracker provides personalized 
                workout recommendations, progress predictions, and insightful analytics to enhance the user's fitness journey. <br/>
                `}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
