import { UseCartContext } from "../context/CartContext/UseCartContext";
import { Item } from "../Item/Item";

export const ItemDetail = ({ detail }) => {
  const { addItem } = UseCartContext();

  return (
    <Item {...detail}>
      <button onClick={()=>{
        addItem(detail)
      }}
      
      >Enviar al carrito</button>
    </Item>
  );
};