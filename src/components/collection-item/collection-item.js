import React from "react";
import "./collection-item.scss";

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}