import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";
import CarouselSection from "../carousel/Carousel";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
// const {Content} = Layout;
import SideMenu from "./SideMenu";
import Shopping from "../Shopping";
const { Content, Header } = Layout;

const Layouts = (props) => {
  return (
    <Layout>
      <Router>
        <NavBar />
        <CarouselSection />
        <Fragment>
          <Content>
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

export default Layouts;
