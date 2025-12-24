// src/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from './Components/Home.js';
import Expo from './Components/Expo.js';
import Speakers from "./Components/Speakers.js";
import Awards from "./Components/Awards.js";
import Partners from "./Components/Partners.js";
import Sessions from "./Components/Sessions.js";
import ScrollToTop from "./Components/ScrollToTop.js";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />



      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibition" element={<Expo />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/sessions" element={<Sessions />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;