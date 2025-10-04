import { Code2, Users, Trophy, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Code2,
    title: 'Hands-On Learning',
    description: 'Build real-world applications with modern technologies and industry best practices.',
    color: 'neo-orange',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn directly from senior engineers with years of experience at top tech companies.',
    color: 'neo-blue',
  },
  {
    icon: Trophy,
    title: 'Career Support',
    description: 'Get personalized guidance, resume reviews, and interview preparation.',
    color: 'neo-yellow',
  },
  {
    icon: Rocket,
    title: 'Job Ready Skills',
    description: 'Master the tools and frameworks that leading companies are hiring for.',
    color: 'neo-orange',
  },
];

export default function Overview() {
  return (
    <section id="overview" className="relative py-24 bg-neo-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Our Program?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide everything you need to launch a successful career in software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-${benefit.color}/10 border border-${benefit.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 text-${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Comprehensive Learning Experience
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Our program is designed to take you from fundamentals to advanced concepts,
                ensuring you have a deep understanding of modern software development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You'll work on real projects, collaborate with peers, and receive personalized
                feedback from industry professionals who are invested in your success.
              </p>
            </div>
            <div className="space-y-4">
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
