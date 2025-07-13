import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

const AppLayout = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!isContactPage && <CTA />}
      <Footer />
    </>
  );
};

export default AppLayout;
