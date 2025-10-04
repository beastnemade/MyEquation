import { Linkedin, Github } from 'lucide-react';

const mentors = [
  {
    name: 'Sarah Chen',
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Giants Inc.',
    expertise: 'React, Node.js, System Design',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Backend Architect',
    company: 'Cloud Solutions Co.',
    expertise: 'Microservices, AWS, Database Design',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Emily Thompson',
    role: 'Frontend Tech Lead',
    company: 'Design Systems Lab',
    expertise: 'UI/UX, React, TypeScript',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'David Kumar',
    role: 'DevOps Principal',
    company: 'Scale Infrastructure',
    expertise: 'CI/CD, Docker, Kubernetes',
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="relative py-24 bg-neo-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Learn From the Best
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our mentors are seasoned professionals from top tech companies with years of
            industry experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neo-dark via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a
                    href="#"
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                    aria-label={`${mentor.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                    aria-label={`${mentor.name} GitHub`}
                  >
                    <Github className="w-4 h-4 text-white" />
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

        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            1-on-1 Mentorship Sessions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Get personalized guidance through weekly one-on-one sessions with your dedicated
            mentor. Discuss your progress, get code reviews, and receive career advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-card p-4">
              <div className="text-2xl font-bold text-neo-orange mb-1">Weekly</div>
              <div className="text-gray-400 text-sm">1-on-1 Sessions</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold text-neo-blue mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Community Support</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold text-neo-yellow mb-1">Lifetime</div>
              <div className="text-gray-400 text-sm">Alumni Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
