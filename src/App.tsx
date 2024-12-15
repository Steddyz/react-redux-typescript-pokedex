import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";

import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
