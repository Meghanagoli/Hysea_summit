// src/App.js

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/" element={<Navigate to="/2026/overview" />} />
          <Route path="/2026/overview" element={<Home />} />
          <Route path="/2026/exhibition" element={<Expo />} />
          <Route path="/2026/speakers" element={<Speakers />} />
          <Route path="/2026/awards" element={<Awards />} />
          <Route path="/2026/partners" element={<Partners />} />
          <Route path="/2026/sessions" element={<Sessions />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;