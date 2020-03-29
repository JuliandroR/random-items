import React from "react";

import Header from "./components/Header";
import CardsContent from "./components/CardsContent";
import Footer from "./components/Footer";

import "./global.css";

function App() {
  return <div className="App">
    <Header />
    <CardsContent />
    <Footer />
  </div>;
}

export default App;
