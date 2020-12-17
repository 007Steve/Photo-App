import React from "react";
import "../styles/RowCard.css";
function RowCard({ image, name }) {
  return (
    <div className="rowCard">
      <img  className="rowCard__image"src={image} alt="" />
      <p className="rowCard__name">{name}</p>
    </div>
  );
}

export default RowCard;
