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
                    <Nav />
                    <RoutesWrapper />
                </BrowserRouter>
            </div>
        </HttpsRedirect>
    );
}

export default App;
