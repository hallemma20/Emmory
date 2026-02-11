import { Navigate, Route, Routes } from "react-router-dom";
import AddItem from "./pages/AddItem/AddItem";
import Wardrobe from "./pages/Wardrobe/Wardrobe";
import Outfits from "./pages/Outfits/Outfits";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/wardrobe" replace />} />
      <Route path="/wardrobe" element={<Wardrobe />} />
      <Route path="/outfits" element={<Outfits />} />
      <Route path="/add-item" element={<AddItem />} />
    </Routes>
  );
}

export default App;
