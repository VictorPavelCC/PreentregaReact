import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  
  return (
    <article className="item-card">
      <img src={imageUrl} alt={description} className="item-img" />
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Descripcion: {description}</p>
      {children}
    </article>
  );
};