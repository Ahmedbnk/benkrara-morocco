import "./App.css";
import HistoryAndGeography from "./components/HistoryAndGeography";

import ArtAndCulture from "./components/ArtAndCulture";
import Gastronomy from "./components/Gastronomy";
import Contemporary from "./components/Contemporary";
import Contact from "./components/Contact";

import NavbarComp from "./components/NavbarComp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import City from "./components/Home/Cities/City";
import Beach from "./components/beaches/Beach";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="HistoryAndGeography" element={<HistoryAndGeography />} />
        <Route path="ArtAndCulture" element={<ArtAndCulture />} />
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
