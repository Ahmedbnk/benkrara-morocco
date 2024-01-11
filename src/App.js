import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home/Home";
import City from "./components/Home/Cities/City";
import Beach from "./components/beaches/Beach";
import HistoryAndGeography from "./pages/HistoryAndGeography/HistoryAndGeography";

import Contact from "./pages/Contact/Contact";
import Lifestyle from "./pages/ArtAndCulture/Lifestyle";
import MoroccanTraditionalCraft from "./pages/ArtAndCulture/MoroccanTraditionalCraft";
import Localproducts from "./pages/ArtAndCulture/Localproducts";
import MoroccanHospitality from "./pages/ArtAndCulture/MoroccanHospitality";
import Gastronomy from "./pages/ArtAndCulture/Gastronomy";
import InternationalBrands from "./pages/ContemporaryMorocco/InternationalBrands";
import CultureAndCinema from "./pages/ContemporaryMorocco/CultureAndCinema";
import ModernMorocco from "./pages/ContemporaryMorocco/ModernMorocco";

function App() {
  return (
    <div className="App" style={{ height: "" }}>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="HistoryAndGeography" element={<HistoryAndGeography />} />

        <Route path="/gastronomy" element={<Gastronomy />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route
          path="/moroccanTraditionalCraft"
          element={<MoroccanTraditionalCraft />}
        />
        <Route path="moroccanHospitality" element={<MoroccanHospitality />} />
        <Route path="/localProducts" element={<Localproducts />} />
        <Route path="HistoryAndGeography/gastronomy" element={<Gastronomy />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="cities/:cityId" element={<City />} />
        <Route path="beaches/:beachId" element={<Beach />}></Route>

        <Route path="international brands" element={<InternationalBrands />} />
        <Route path="culture cinema" element={<CultureAndCinema />} />
        <Route path="modernization" element={<ModernMorocco />} />
      </Routes>
    </div>
  );
}

export default App;
