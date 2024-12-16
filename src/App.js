import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import SemanticsWork from './components/SemanticsWork';
import SemanticsApi from './components/SemanticsApi';
import KeyFaq from './components/KeyFaq';
import Headless from './components/Headless';
import DataHosting from './components/DataHosting';
import SemanticsInput from './components/SemanticsInput';
import Footer from './common/Footer';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <Hero />
      <SemanticsWork />
      <SemanticsApi />
      <KeyFaq />
      <Headless />
      <DataHosting />
      <SemanticsInput />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
