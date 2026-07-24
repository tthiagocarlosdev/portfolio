import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'
import ProjectSession from './components/ProjectSession/ProjectSession';
import ContactSection from './components/ContactSection/ContactSection';
import Navigationbar from './components/NavigationBar/NavigationBar';

import './App.css';

function App() {

  return (
    <>
      <Navigationbar />
      <Header/>
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectSession />
      <ContactSection />
      <Footer/>
    </>
  )
}

export default App
