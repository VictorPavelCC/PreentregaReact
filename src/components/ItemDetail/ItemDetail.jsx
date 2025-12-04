
import { UseCartContext } from "../../context/CartContext/UseCartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count";


export const ItemDetail = ({detail}) => {
        const {addItem} = UseCartContext();

        const handleAdd = (quantity) => {
            addItem({...detail, quantity})
        }
    
    return (
    <Item {...detail}>
        <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
        
    </Item>
    );
};
