import React from "react";
import { Provider } from "react-redux";
import Products from "./Products";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="header container">
          <h1 className="logo">
            Products
            <span className="text-blue">R</span>
            us
          </h1>
        </header>

        <div className="container">
          <h2 className="title">
            Products for sale
          </h2>
        </div>

        <Products />
      </div>
    </Provider>
  );
}

export default App;
