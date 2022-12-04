import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainSearch from "./components/MainSearch";

import Favourite from "./components/Favourite";

function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
