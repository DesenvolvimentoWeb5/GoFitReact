import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Gym } from "../pages/Gym";
import { Calculators } from "../pages/Calculators";
import { Nutrition } from "../pages/Nutrition";
import { About } from "../pages/About";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}