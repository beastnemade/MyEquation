import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProgramHeader() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef}
      className={`relative py-16 fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-children ${isVisible ? 'visible' : ''}`}>
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-neo-orange mb-2">500+</div>
            <div className="text-gray-400">Students Enrolled</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-neo-blue mb-2">4.9</div>
            <div className="text-gray-400">Course Rating</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-4xl font-bold text-neo-yellow mb-2">100+</div>
            <div className="text-gray-400">Hours of Learning</div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 mb-16 max-w-4xl mx-auto">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left">
              A <span className="text-neo-blue">55-Hour</span> Self-Paced Program
              <br />
              <span className="text-white">by NVIDIA & IBM Mentors</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <img
              src="nvidia1.png"
              alt="NVIDIA Logo"
              className="h-16 sm:h-20 lg:h-24 object-contain"
            />
            <img
              src="ibm.png"
              alt="IBM Logo"
              className="h-16 sm:h-20 lg:h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}