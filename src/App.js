import "./App.css";

import NavbarComp from "./components/NavbarComp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import City from "./components/Home/Cities/City";
import Beach from "./components/beaches/Beach";
import HistoryAndGeography from "./pages/HistoryAndGeography/HistoryAndGeography";

import Contemporary from "./pages/Contemporary/Contemporary";
import Gastronomy from "./pages/Gastronomy/Gastronomy";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App" style={{ height: "" }}>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="HistoryAndGeography" element={<HistoryAndGeography />} />

        <Route path="Gastronomy" element={<Gastronomy />} />

        <Route path="Contemporary" element={<Contemporary />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="cities/:cityId" element={<City />} />
        <Route path="beaches/:beachId" element={<Beach />}></Route>
      </Routes>
    </div>
  );
}

export default App;
