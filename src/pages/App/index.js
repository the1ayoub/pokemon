import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "../Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NotFound from "../NotFound";
import ViewPokemon from "../ViewPokemon";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className={"body-container"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/:pokemonId" element={<ViewPokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
