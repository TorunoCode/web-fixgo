import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes/Routes";

import store from "../redux/store";
import { Provider } from "react-redux";

const Layout = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default Layout;
