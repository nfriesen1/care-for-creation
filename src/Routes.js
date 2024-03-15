import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import NavBar from "../src/components/NavBar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}