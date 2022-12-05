import React from "react";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({exercise,handleAddToCart}) => {
  const {title,age, timeRequired, description, image} = exercise;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description.slice(0,75)}</p>
        <h4>For Age : {age}</h4>
        <h4>Time required : {timeRequired}s</h4>
      </div>
      <Button fnc={handleAddToCart} text={"Add to list"} color={"#5D5FEF"} time={timeRequired}/>
    </div>
  );
};

export default Card;
