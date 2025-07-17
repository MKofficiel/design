import { BrowserRouter, Route, Routes } from "react-router";

// import Locations from "./pages/Locations";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import AppLayout from "./pages/AppLayout";
// import Services from "./pages/Services";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";
import ScrollToTop from "./components/ScrollToTop";

const AppLayout = lazy(() => import("./pages/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Locations = lazy(() => import("./pages/Locations"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
