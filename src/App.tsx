import { BreedModal } from "./components/BreedModal";
import CatModal from "./components/CatModal";
import Header from "./components/Header";
import Breed from "./pages/Breed";
import { FavoritePage } from "./pages/Favorites";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <BreedModal />
        <CatModal />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breed" element={<Breed />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
