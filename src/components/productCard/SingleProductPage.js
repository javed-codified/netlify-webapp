import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

import { getProductById } from "../../remote/woocommerce";

const SingleProductPage = (props) => {
  const [product, setProduct] = useState([]);
  const [product_id, setProduct_id] = useState();
  const [productImg, setProductImg] = useState("");

  useEffect(() => {
    getProductById(props.match.params.id).then((response) => {
      console.log(response);
      setProduct(response.data);
      setProductImg(response.data.images[0].src);
    });
    setProduct_id(props.match.id);
    console.log(props.match.params.id);
    console.log("image", productImg);
  }, []);

  return (
    <>
      <h1> {product.name} </h1>
      <h2>price = {product.price} </h2>
      {parse(String(product.price_html))}
      {parse(String(product.short_description))}
      <img src={productImg} />
    </>
  );
};

export default SingleProductPage;
