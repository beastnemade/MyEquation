import { Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const mentors = [
  {
    name: 'Yashashvi Singh',
    role: 'SSW Engineer',
    company: 'NVIDIA',
    expertise: 'Artificial Intelligence, Python',
    imageUrl: 'https://myequation-aiml-website.vercel.app/_next/static/media/mentor2.9b2f0c0b.png',
    linkedinUrl: 'https://www.linkedin.com/in/yashashvi-singh-3013a4205/',
  },
  {
    name: 'Soumya SV',
    role: 'AI Engineer',
    company: 'IBM',
    expertise: 'Artificial Intelligence, Python, Machine Learning Algorithms',
    imageUrl: 'https://myequation-aiml-website.vercel.app/_next/static/media/mentor1.92af4235.png',
    linkedinUrl: 'https://www.linkedin.com/in/soumya-sv-profile/',
  },
];

export default function Mentors() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      id="mentors"
      className={`relative py-24 fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
            Learn From the Best
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Our mentors are seasoned professionals from top tech companies with years of
            industry experience
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl w-full">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neo-dark via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <a
                      href={mentor.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                      aria-label={`${mentor.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neo-orange transition-colors duration-300">
                  {mentor.name}
                </h3>
                <p className="text-neo-orange font-semibold mb-1">{mentor.role}</p>
                <p className="text-gray-500 text-sm mb-3">{mentor.company}</p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-gray-400 text-sm">{mentor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
