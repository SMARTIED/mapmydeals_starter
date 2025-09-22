import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import MapView from "./pages/MapView";
import Settings from "./pages/Settings";
import Header from "./components/Header"; //

function App() {
  return (
    <div className="min-h-screen flex flex-col">
<Header /> 
      <nav className="bg-primary text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">MapMyDeals</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/map">Map</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>

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
