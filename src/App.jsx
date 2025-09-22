import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import MapView from "./pages/MapView";
import Settings from "./pages/Settings";
import Header from "./components/Header"; // 👈 Your import is correct

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* 👈 Your Header component is correct */}

      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      <footer className="bg-gray-200 text-center p-2 text-sm">
        © {new Date().getFullYear()} MapMyDeals — Navigate to Savings
      </footer>
    </div>
  );
}

export default App;