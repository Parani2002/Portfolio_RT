import Header from "./components/Header";
import Projects from "./components/Projects";
import Aboutme from "./components/AboutMe";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="!scroll-smooth bg-gray-200">
      <Header />
      <main>
        <section id="home" className="w-100 scroll-smooth">
          <Hero />
        </section>
        <section id="about" className="w-100 scroll-smooth">
          <Aboutme />
        </section>
        <section id="projects" className="w-100 scroll-smooth">
          <Projects />
        </section>
        <section id="contact" className="w-100 scroll-smooth">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
