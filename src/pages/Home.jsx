import Footer from "../components/Footer";
import Header from "../components/Header";
import CTA from "../sections/CTA";
import DesignServices from "../sections/DesignServices";
import Hero from "../sections/Hero";
import Values from "../sections/Values";

const Home = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <DesignServices />
      <Values />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
