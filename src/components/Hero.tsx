import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neo-dark">
      <AnimatedBackground />
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24 lg:py-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 animate-slide-in leading-tight">
          Master AI & Machine Learning
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-neo-orange via-neo-yellow to-neo-orange bg-clip-text text-transparent">
            From Complete Noobie to Pro
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in px-2">
          Learn Python, Artificial Intelligence, Machine Learning, and
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          Deep Learning from Industry Experts at NVIDIA and IBM
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          in Just 100 Hours!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-in px-4">
          <button
            onClick={scrollToRegister}
            className="btn-primary flex items-center gap-2 group"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('overview');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}
