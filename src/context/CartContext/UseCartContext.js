import { useContext } from "react"
import { CartContext } from "./CartContext"
export const UseCartContext = () => {
    return useContext(CartContext)
};