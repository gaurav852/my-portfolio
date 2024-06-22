import React from "react";
import "./Projects.css";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="main-project-content-area">
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
  );
};

export default Projects;
