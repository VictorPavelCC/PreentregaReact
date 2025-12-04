import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Nav } from "./components/Nav/Nav";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Carrito } from "./components/Carrito/Carrito";
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from './components/Login/Login';
import { AuthProvider } from "./context/AuthContext/AuthProvider"
//import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
       <CartProvider>

        <Routes>
          <Route element = {<MainLayout />}>
          <Route path="/" element={<ItemListContainer />}   />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
           <Route path="/carrito" element={<Carrito />} />
           </Route>
            
          <Route  path="/admin" element={<Login />}/>
          
          <Route path="/admin-panel" element={<RutaProtegida><AdminLayout/></RutaProtegida>}>
          <Route path="alta-productos" element={<RutaProtegida><ProductFormContainer/></RutaProtegida>}/></Route>

        </Routes>

     </CartProvider>  
     </AuthProvider>
     </BrowserRouter>
    </>
  );
}

export default App;