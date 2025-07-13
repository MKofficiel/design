import { BrowserRouter, Route, Routes } from "react-router";

import Locations from "./pages/Locations";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppLayout from "./pages/AppLayout";
import Services from "./pages/Services";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="location" element={<Locations />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="our-company" element={<About />} />
          <Route path="locations" element={<Locations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/:service" element={<Services />} />
          <Route path="locations" element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
