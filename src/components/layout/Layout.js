import React, {useEffect, Fragment } from "react";
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

const Layouts = (props) => {

  useEffect(() => {
    var url = `${process.env.REACT_APP_WOOCOMMERCE_API_ENDPOINT}/wp-json/wc/v3/products/categories`;
     fetch(url,{
       method:"GET",
       headers:{
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*',
        params: {},
        withCredentials: true,
        auth: {
          username: process.env.REACT_APP_WOOCOMMERCE_API_CLIENT,
          password: process.env.REACT_APP_WOOCOMMERCE_API_SECRET,
        },
       }
     })
     .then((json)=>json.json())
     .then((response)=>{
       console.log(response);
     })
     .catch((err)=>console.log(err));

  }, [])


  return (
    <Layout>
      <Router>
        <NavBar />
        

         <Fragment>
           <Content>
               <Layout style={{ background: "#fff" }}>
                  <CarouselSection />
              </Layout>
           </Content>
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

export default Layouts;
