import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./Styles/styles.css";
import Nav from "../src/Components/Nav";
import RoutesWrapper from "./Components/RoutesWrapper/RoutesWrapper";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <RoutesWrapper />
            </BrowserRouter>
        </div>
    );
}

export default App;
