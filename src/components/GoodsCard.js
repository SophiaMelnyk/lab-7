import React from "react";

function GoodsCard({ image, title, price }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={image} alt={title} width="200" />
      <h3>{title}</h3>
      <p>Ціна: {price}</p>
    </div>
  );
}

export default GoodsCard;