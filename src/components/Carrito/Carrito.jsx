import { UseCartContext } from "../../context/CartContext/UseCartContext";
import "./Carrito.css"

export const Carrito = () => {
  const {cart, addItem, clearCart, deleteItem, getTotal} = UseCartContext();
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
            <div className="cantidad-controls">
              <button onClick={() => addItem({ ...prod, quantity: 1 })}>+</button>
              <span>{prod.quantity}</span>
              <button onClick={() => {
                  if (prod.quantity > 1) {
                    addItem({ ...prod, quantity: -1 });
                  } else {
                    deleteItem(prod.id);
                  }
                }}
              >
                -
              </button>
              <button className="delete-btn" onClick={() => deleteItem(prod.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="carrito-footer">
        <h3>Total: ${getTotal()}</h3>
        <button onClick={clearCart} className="vaciar-btn">Vaciar carrito</button>
      </div>
    </div>
  );
};