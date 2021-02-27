import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import CarouselSection from "../carousel/Carousel";
import { BrowserRouter as Router, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
// const {Content} = Layout;
import SideMenu from "./SideMenu";
import Shopping from "../Shopping";
import Categories from "../categorySection/Categories";
import SingleProduct from "../productCard/SingleProduct";
import ProductList from '../productCard/ProductList';

const { Content, Header } = Layout;

const Layouts = (props) => {
  return (
    <Layout>
      <Router>
        <NavBar />
        <Content style={{ marginTop: "63px" }}>
        <CarouselSection />
        </Content>
        <Fragment>
          <Content>
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
              <SideMenu />
               <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Route path="/category/:id" component={ProductList} />
                <Route exact path="/product/:id" component={SingleProduct}/>
              </Content>
            </Layout>
          </Content>

          <Content>
            <Categories />
          </Content>

          <Footer />
        </Fragment>
      </Router>
    </Layout>
  );
};

export default Layouts;
