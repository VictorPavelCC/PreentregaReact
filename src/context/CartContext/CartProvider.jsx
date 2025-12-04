import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };
    
    const addItem = (item) => {
        if (exists (item.id)) {
            
            const updatedCart = cart.map((prod) => {
               if (prod.id === item.id){
                return {...prod, quantity: prod.quantity + (item.quantity || 1)}
               } 
                return prod;
               
            })
            setCart(updatedCart);
            }else{
            setCart([...cart, {...item, quantity: item.quantity || 1}]);
            alert(`${item.name} agregado`);
            }
    };
    const deleteItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
    };


    const clearCart = () => {
        setCart([])
    };

    const getTotalItems = () => {
        if (cart.length) {
            return cart.length;
        }
    };

   const getTotal = () => Math.round(cart.reduce((acc, p) => acc + p.price * p.quantity, 0) * 100) /100;     


    const values = {
        cart, 
        addItem,
        deleteItem,
        clearCart,
        getTotalItems,
        getTotal
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
};