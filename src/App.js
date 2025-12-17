
// src/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from './Components/Home.js';
import Expo from './Components/Expo.js';
import Speakers from "./Components/Speakers.js";
import Awards from "./Components/Awards1.js";
function App() {
  return (
  <BrowserRouter>
  <Navbar/>

      
      
<main > 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exhibition" element={<Expo/>} />       
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/awards" element={<Awards/>}/>
        </Routes>
      </main>
      </BrowserRouter>

  );
}

export default App;
