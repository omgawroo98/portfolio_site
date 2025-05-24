import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import SectionWrapper from './layout/SectionWrapper';
import SwirlBackground from './effects/SwirlBackground';
import GlowEffectDemo from './layout/GlowEffectDemo';
import StarField from './effects/StarField';

function App() {
  return (

    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* <SwirlBackground /> */}
      <StarField />
      <Navbar />
      <main>
        <SectionWrapper id="home" fullHeight><Home /></SectionWrapper>
        <SectionWrapper id="about"><About /></SectionWrapper>
        <SectionWrapper id="skills"><Skills /></SectionWrapper>
        <SectionWrapper id="services"><Services /></SectionWrapper>
        <SectionWrapper id="portfolio"><Portfolio /></SectionWrapper>
        <SectionWrapper id="contact"><Contact /></SectionWrapper>
        <GlowEffectDemo />
      </main>
    </div>
  );
}

export default App;