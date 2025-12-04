import "./Nav.css"
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext/UseCartContext";

export const Nav = () => {
  const { getTotalItems } = UseCartContext();

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/gato"}>Gatos</Link>
        </li>
        <li>
          <Link to={"/category/perro"}>Perros</Link>
        </li>
        <li>
          <Link to={"/category/accesorios"}>Accesorios</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};