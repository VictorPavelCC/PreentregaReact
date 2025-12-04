import React from 'react';
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { UseCartContext } from '../../context/CartContext/UseCartContext';
import './ItemList.css'; 

export const ItemList = ({ lista }) => {
  const {addItem} = UseCartContext();
  
  return (
      <>
          {lista.length
          ? lista.map((prod) => (
              <div key={prod.id} className="item-card-container">
                <Link key={prod.id} to={`/detail/${prod.id}`}>
    <Item {...prod} />
  </Link>

                <button onClick={() => addItem(prod)}>Agregar al carrito</button>
              </div>
            ))
          : <p>No hay productos</p>}
          </>
    );
};