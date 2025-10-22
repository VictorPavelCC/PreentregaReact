import { UseCartContext } from "../../context/CartContext/UseCartContext";
import "./Carrito.css"

export const Carrito = () => {
  const {cart} = UseCartContext();
console.log(cart);
  if (cart.length === 0) return <p>El carrito está vacío 🛒</p>;

  return (
    
    <div className="carrito-container">
      <h2>Mi Carrito</h2>
      <ul>
        {cart.map((prod, index) => (
          <li key={index}>
            <img src={prod.imageUrl} alt={prod.name} width="50" />
            <span>{prod.name}</span> - <span>${prod.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};