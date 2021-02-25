import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";
import CarouselSection from "../carousel/Carousel";
import ProductList from "../productCard/ProductList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col, Layout } from "antd";
// const {Content} = Layout;
import SideMenu from "./SideMenu";
import Shopping from "../Shopping";
const { Sider, Content } = Layout;

const layout = (props) => {
  return (
    <Layout>
     <NavBar />
      <CarouselSection />
       <Router>
        <Fragment>
          <Content style={{ padding: "0 20px" }}>
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
              <SideMenu />
               <Content style={{ padding: "0 24px", minHeight: 280 }}>
                 <Route path="/category/:id" component={Shopping} />
              </Content>
            </Layout>
          </Content>
          <Footer />
        </Fragment>
      </Router>
    </Layout>
  );
};

export default layout;
