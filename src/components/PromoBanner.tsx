import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PromoBanner() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={elementRef}
      className={`bg-gradient-to-r from-neo-orange to-neo-yellow py-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <div>
                <span className="text-white font-bold text-base sm:text-lg">Special </span>
                <span className="text-neo-dark font-bold text-base sm:text-lg">NEW LIMITED OFFER</span>
                <span className="text-white font-bold text-base sm:text-lg">, Grab Now!</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-white">Rs. 4999</span>
                <span className="text-lg sm:text-xl text-neo-dark line-through font-semibold">Rs. 8000</span>
              </div>
            </div>

            <button
              onClick={scrollToRegister}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}