import React from "react";
import "./Card.css";

const Card = ({ title, text }) => {
  return (
      <div className="card">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
  );
};

export default Card;
