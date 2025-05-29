import Navbar from './layout/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import StarField from './effects/StarField';
import { BackgroundBeams } from './effects/BackgroundBeams';
import { FadeInOnScroll } from './effects/FadeInOnScroll';
import { LinkPreview } from './effects/LinkPreview';

function App() {
  return (
    <div>
      {/* <SwirlBackground /> */}
      {/* <StarField /> */}
      <BackgroundBeams />
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <FadeInOnScroll delay={0.2}>
          <section id="about">
            <About />
          </section>


          <section id="skills">
            <Skills />
          </section>

          {/* <section id="services">
          <Services />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section> */}

          <section id="contact">
            <Contact />
          </section>
        </FadeInOnScroll>

      </main>
    </div>
  );
}

export default App;