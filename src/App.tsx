import Navbar from './layout/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import SwirlBackground from './effects/SwirlBackground';
import StarField from './effects/StarField';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* <SwirlBackground /> */}
      {/* <StarField /> */}
      <Navbar />
      <main>
        <section id="home" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;