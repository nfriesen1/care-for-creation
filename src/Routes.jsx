import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Not Found route */}
      </Routes>
    </BrowserRouter>
  );
}