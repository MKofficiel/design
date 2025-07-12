import { Outlet } from "react-router";
import Header from "../components/Header";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default AppLayout;
