import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramHeader from './components/ProgramHeader';
import Overview from './components/Overview';
import Curriculum from './components/Curriculum';
import ProgramBreakdown from './components/ProgramBreakdown';
import Mentors from './components/Mentors';
import WhyBuyCarousel from './components/WhyBuyCarousel';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import ContactRegister from './components/ContactRegister';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';

function App() {
  return (
    <div className="min-h-screen bg-neo-dark">
      <Navbar />
      <main>
        <Hero />
        <ProgramHeader />
        <Overview />
        <ProgramBreakdown />
        <Curriculum />
        <Mentors />
        <WhyBuyCarousel />
        <Testimonials />
        <FAQs />
        <ContactRegister />
      </main>
      <Footer />
      <PromoBanner />
    </div>
  );
}

export default App;
