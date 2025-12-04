import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getProducts } from "../../services/product";


export const ItemListContainer = (/*{}*/) => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();  

useEffect(() => {
  setLoading(true);
  setError(null);

  getProducts(category)
    .then((data) => {
      setLista(data);
    })
    .catch((err) => {
      console.error(err);
      setError("No se pudieron cargar los productos");
    })
    .finally(() => {
      setLoading(false);
    });
}, [category]);

  if (loading || error) {
  return (
    <div className="item-list-container">
      <p>{loading ? 'Cargando productos...' : error}</p>
    </div>
  );
}


  return (
  <div className="item-list-container">
    <ItemList lista={lista} />
  </div>
);

};
