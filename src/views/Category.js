import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardCategory from "../components/Landing/CardCategory";
import "./CSS/Category.css";

const Category = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Naty1991/FAKEDATA/products")
      .then((response) => response.json())
      .then((data) => setCategoria(data));
  }, []);
  return (
    <div className="container-categoria">
      {categoria.map((info) => {
        return (
          <div className="links-categoria" key={info.id}>
            <Link
              className="link-categoria"
              to={`/category/${info.category}/${info.id}`}
            >
              <CardCategory cat={info} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
