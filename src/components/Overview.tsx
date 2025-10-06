import { Code2, Users, Trophy, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    icon: Code2,
    title: 'Core Knowledge On AI & ML',
    description: 'Master Python and ML basics to advanced. Explore supervised learning, pipelines, and key algorithms like SVM, KNN, and XGBoost.',
    color: 'neo-orange',
  },
  {
    icon: Rocket,
    title: 'Industrial Grade Projects',
    description: 'Build AI apps like Tesla & healthcare. Learn MLOps, deployment, and use real templates with guided code.',
    color: 'neo-blue',
  },
  {
    icon: Users,
    title: 'Expert Industrial Mentors',
    description: 'Learn from AI professionals at NVIDIA & IBM using real-world tools to make you gain-skills in AI and be deployment-ready.',
    color: 'neo-yellow',
  },
  {
    icon: Trophy,
    title: 'Company Verified Certificates',
    description: 'Earn industry-recognized certificates backed by expert reviews -used by professionals at IBM, NVIDIA, and top firms.',
    color: 'neo-orange',
  },
];

export default function Overview() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef}
      id="overview" 
      className={`relative py-24 fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
            Why Choose Our Program?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            We provide everything you need to launch a successful career in software development
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="relative h-64 glass-card p-8 flex flex-col items-center justify-center group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Front Content - Title and Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-300 ease-out transform group-hover:opacity-0 group-hover:scale-95 group-hover:-translate-y-2">
                  <div
                    className={`w-14 h-14 rounded-xl bg-${benefit.color}/10 border border-${benefit.color}/20 flex items-center justify-center mb-6 transition-all duration-300 ease-out transform group-hover:scale-110 group-hover:rotate-12`}
                  >
                    <Icon className={`w-7 h-7 text-${benefit.color} transition-all duration-300 ease-out transform group-hover:scale-125`} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center transition-all duration-300 ease-out transform group-hover:scale-105">{benefit.title}</h3>
                </div>

                {/* Back Content - Description */}
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-all duration-300 ease-out transform translate-y-4 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                  <p className="text-gray-300 leading-relaxed text-center transition-all duration-300 ease-out transform group-hover:scale-105">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 glass-card p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="px-2 sm:px-4 lg:pl-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Comprehensive Learning Experience
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Our program is designed to take you from fundamentals to advanced concepts,
                ensuring you have a deep understanding of modern software development.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                You'll work on real projects, collaborate with peers, and receive personalized
                feedback from industry professionals who are invested in your success.
              </p>
            </div>
            <div className="space-y-4 px-2 sm:px-4 lg:pl-24 mt-8 lg:mt-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-neo-orange font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Live Interactive Sessions</h4>
                  <p className="text-gray-400 text-sm">Engage in real-time learning</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-neo-blue/10 border border-neo-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-neo-blue font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Project-Based Curriculum</h4>
                  <p className="text-gray-400 text-sm">Build your portfolio</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-neo-yellow/10 border border-neo-yellow/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-neo-yellow font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Lifetime Community Access</h4>
                  <p className="text-gray-400 text-sm">Network with alumni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
