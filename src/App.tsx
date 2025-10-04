import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Curriculum from './components/Curriculum';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import ContactRegister from './components/ContactRegister';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neo-dark">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Curriculum />
        <Mentors />
        <Testimonials />
        <ContactRegister />
      </main>
      <Footer />
    </div>
  );
}

export default App;
