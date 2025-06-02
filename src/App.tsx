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
import Experience from './components/Experience';
import CustomCard from './layout/CustomCard';

function App() {
  return (
    <div>
      {/* <SwirlBackground /> */}
      <BackgroundBeams />
      <Navbar />
      <CustomCard glow={false} sx={{ width: '70%', mx: 'auto', backgroundColor: '#0a0a0a', p: 0 }}>
        <main>
          <section id="home" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Home />
            </div>

            {/* <StarField /> */}
          </section>

          <section id="experience" >
            <Experience />
          </section>

          <FadeInOnScroll delay={0.2}>

            <section id="about">
              <About />
            </section>

          </FadeInOnScroll>

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

        </main>
      </CustomCard>
    </div >
  );
}

export default App;