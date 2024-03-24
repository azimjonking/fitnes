import React, { useEffect }  from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Privacy from "./pages/privacy/Privacy";
import Cookie from "./pages/cookie/Cookie";

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/privacy" exact element={<Privacy />} />
        <Route path="/cookie" exact element={<Cookie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
