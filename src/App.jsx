import NavBar from "./sections/navbar/NavBar";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import FAQs from "./sections/faqs/FAQs";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

export const App = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};
