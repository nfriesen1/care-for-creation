import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import About from "./pages/About.js";
import Events from "./pages/Events.js";
import Resources from "./pages/Resources.js";
import Contact from "./pages/Contact.js";

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