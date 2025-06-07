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
import SectionSeparator from './layout/SectionSeperator';
import SpotlightDemo from './demos/SpotlightDemo';

function App() {
  return (
    <div>
      {/* <SwirlBackground /> */}
      {/* <BackgroundBeams /> */}
      <Navbar />
      <CustomCard
        glow={false}
        sx={{
          maxWidth: '1500px',
          width: '100%',
          mx: 'auto',
          px: '1rem',  // horizontal padding
          backgroundColor: '#0a0a0a',
          p: 0,
        }}
      >
        <main>
          <section id="home" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <Home />
            </div>

            {/* <StarField /> */}
          </section>

          <SectionSeparator />

          <section id="experience" >
            <Experience />
          </section>

          <SectionSeparator />

          <section id="about">
            <About />
          </section>

          <SectionSeparator />

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

          <SpotlightDemo />

        </main>
      </CustomCard>
    </div >
  );
}

export default App;