import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const modules = [
  {
    week: 'Week 1-2',
    title: 'Foundations & Setup',
    topics: [
      'Development Environment Configuration',
      'Git & Version Control Mastery',
      'JavaScript ES6+ Fundamentals',
      'TypeScript Basics',
    ],
  },
  {
    week: 'Week 3-4',
    title: 'React & Modern Frontend',
    topics: [
      'React Fundamentals & Hooks',
      'Component Architecture Patterns',
      'State Management (Context, Zustand)',
      'Styling with Tailwind CSS',
    ],
  },
  {
    week: 'Week 5-6',
    title: 'Backend Development',
    topics: [
      'Node.js & Express.js',
      'RESTful API Design',
      'Database Design & SQL',
      'Authentication & Authorization',
    ],
  },
  {
    week: 'Week 7-8',
    title: 'Full-Stack Integration',
    topics: [
      'Connecting Frontend & Backend',
      'API Integration Best Practices',
      'Error Handling & Validation',
      'File Upload & Storage',
    ],
  },
  {
    week: 'Week 9-10',
    title: 'Advanced Concepts',
    topics: [
      'Performance Optimization',
      'Testing (Unit, Integration, E2E)',
      'CI/CD Pipelines',
      'Security Best Practices',
    ],
  },
  {
    week: 'Week 11-12',
    title: 'Capstone Project',
    topics: [
      'Project Planning & Architecture',
      'Full-Stack Application Development',
      'Code Review & Refactoring',
      'Deployment & Production Launch',
    ],
  },
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="relative py-24 bg-neo-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Curriculum Overview
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive 12-week journey from fundamentals to production-ready applications
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neo-orange via-neo-blue to-neo-yellow opacity-50" />

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="relative"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full glass-card glass-card-hover p-6 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          openIndex === index
                            ? 'bg-neo-orange text-white shadow-lg shadow-neo-orange/50'
                            : 'bg-white/5 text-gray-400 border border-white/10'
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-neo-orange font-semibold mb-1">
                        {module.week}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neo-orange transition-colors duration-300">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="ml-8 mt-2 glass-card p-6 space-y-3 animate-slide-in">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-neo-orange flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-8 inline-block">
            <p className="text-gray-400 mb-2">Total Learning Hours</p>
            <p className="text-4xl font-bold text-white">
              <span className="text-neo-orange">300+</span> Hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
