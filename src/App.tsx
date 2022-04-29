import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/styles.css';

import Home from "../src/Components/Home";
import Nav from "../src/Components/Nav";

function App() {
  return (
    <div className="App">
      {/* <div className='work-in-progress'>Currently a work in progress! Come back in a few days :)</div> */}
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
