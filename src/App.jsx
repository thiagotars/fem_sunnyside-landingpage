import About from "./containers/About";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Testimonials from "./containers/Testimonials";
import Projects from "./containers/Projects";
import Services from "./containers/Services";

function App() {
  return (
    <main className="flex flex-col items-center bg-background-color z-[-10]">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
