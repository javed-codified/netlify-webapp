import React from "react";
import { useEffect, useState, Component } from "react";
import { Layout, Menu, Spin } from "antd";
import { Link } from "react-router-dom";
import { getCategories } from "../../../src/remote/woocommerce";
import "./Categories.css";

const Categories = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getCategories().then((response) => {
      console.log(response.data);
      setProduct(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div>
      {product.map((category) => {
        return (
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight">Flex item 1</div>
            <div class="p-2 bd-highlight">Flex item 2</div>
            <div class="p-2 bd-highlight">Flex item 3</div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
