import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import SectionWrapper from './layout/SectionWrapper';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <SectionWrapper id="home" fullHeight><Home /></SectionWrapper>
        <SectionWrapper id="about"><About /></SectionWrapper>
        <SectionWrapper id="skills"><Skills /></SectionWrapper>
        <SectionWrapper id="services"><Services /></SectionWrapper>
        <SectionWrapper id="portfolio"><Portfolio /></SectionWrapper>
        <SectionWrapper id="contact"><Contact /></SectionWrapper>
      </main>
    </>
  );
}

export default App;