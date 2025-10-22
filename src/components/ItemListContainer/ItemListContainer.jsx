import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(category ? data.filter((p) => p.category === category) : data);
        //setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <section className="item-list-container">
      <h1>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};