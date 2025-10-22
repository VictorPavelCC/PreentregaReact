import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Nav } from "./components/Nav/Nav";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Carrito } from "./components/Carrito/Carrito";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/"  element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category"  element={<ItemListContainer titulo=""/>} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;