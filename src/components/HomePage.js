import React from "react";
import Layouts from "../components/layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import SingleProduct from "./productCard/SingleProduct";

const HomePage = () => {
  return <Layouts />;
};

export default HomePage;
