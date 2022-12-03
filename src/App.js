import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MyJumbo from "./components/MyJumbo";
import MyFooter from "./components/MyFooter";

import MainSearch from "./components/MainSearch";
import Favs from "./components/Favourite";

function App() {
  return (
    <div className="bg-dark">
      <MyNavbar />
      <MyJumbo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/Favourites" element={<Favs />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </div>
  );
}

export default App;
