import "./App.css";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Pricing } from "./components/Pricing/Pricing";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { Teams } from "./components/Teams/Teams";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Works } from "./components/Works/Works";

function App() {
  return (
    <>
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <Works />
        <Teams />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
