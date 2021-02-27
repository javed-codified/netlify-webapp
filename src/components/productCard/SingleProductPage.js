import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

import { Row, Col, Tab, Tabs, Sonnet } from "react-bootstrap";


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
      <Row>
        <Col md={6}>
          <img src={productImg} />
        </Col>
        <Col md={6}>
          <h1> {product.name} </h1>
          <p>Sku:{product.sku}</p>
          <h2>price = {product.price} </h2>
          {parse(String(product.price_html))}
          {parse(String(product.short_description))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="description" id="product_tab">
            <Tab eventKey="description" title="Description">
              <Row> {parse(String(product.description))} </Row>
            </Tab>
            <Tab eventKey="additional_information" title="Additional Information">
              {parse(String(product.short_description))}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default SingleProductPage;
