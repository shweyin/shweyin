import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./Styles/styles.css";
import Nav from "../src/Components/Nav";
import RoutesWrapper from "./Components/RoutesWrapper/RoutesWrapper";
import HttpsRedirect from "react-https-redirect";

function App() {
    return (
        <HttpsRedirect>
            <div className="App">
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
