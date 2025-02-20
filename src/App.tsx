import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Nav from "./Components/Nav";
import RoutesWrapper from "./Components/RoutesWrapper";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <div className="m-0 p-0 flex flex-col md:flex-row overflow-hidden text-white">
        <BrowserRouter>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <Nav />
          <RoutesWrapper />
        </BrowserRouter>
      </div>
    </HttpsRedirect>
  );
}

export default App;
