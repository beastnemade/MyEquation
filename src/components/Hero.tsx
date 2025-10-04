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

      <div className="absolute inset-0 bg-gradient-to-b from-neo-dark/50 via-transparent to-neo-dark/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-in">
          Master the Future of
          <span className="block mt-2 bg-gradient-to-r from-neo-orange via-neo-yellow to-neo-orange bg-clip-text text-transparent">
            Software Development
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in">
          Transform your career with our intensive program. Learn from industry experts,
          build real-world projects, and join a community of ambitious developers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in">
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

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-neo-orange mb-2">12 Weeks</div>
            <div className="text-gray-400">Intensive Program</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-neo-blue mb-2">100+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-neo-yellow mb-2">95%</div>
            <div className="text-gray-400">Job Placement</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
