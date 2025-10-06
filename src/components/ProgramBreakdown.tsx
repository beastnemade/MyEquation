import { Check, Video, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const programs = [
  {
    title: 'Python Programming',
    subtitle: 'Basic to Advanced',
    icon: 'python.png',
    points: [
      'Python Fundamentals: Solid understanding of core concepts including data types, loops, functions, OOPs, file handling, and exception management.',
      'Tooling & Ecosystem Mastery: Worked with virtual environments, pip/conda, and created custom modules and packages for modular Python development.',
      'Advanced Libraries & Techniques: Practical experience with NumPy, OpenCV, datetime, threading, decorators, and GUI development; applied list comprehensions, generators, lambdas, and context managers effectively.',
      'Debugging & Real-World Applications: Proficient in debugging with PDB, performance tuning, AsyncIO, and building real-world apps involving image processing, face detection, Pandas, Matplotlib, and API integrations.',
    ],
    videos: 10,
    hours: 12,
  },
  {
    title: 'Machine Learning',
    subtitle: 'Basic to Advanced',
    icon: 'ML.png',
    points: [
      'ML Foundations & Workflow: Covered supervised and unsupervised learning, AI system design, predictive maintenance, and key ML concepts like features, labels, overfitting/underfitting, and end-to-end pipelines on Google Colab.',
      'Data Handling & Visualization: Proficient in NumPy, Pandas for data wrangling and CSV operations; utilized Matplotlib and Seaborn for visualizations including trends, heatmaps, and pairplots.',
      'Core ML Algorithms: Hands-on experience with Linear/Logistic Regression, SVM, Naive Bayes, Decision Trees, Random Forest, XGBoost, CatBoost; explored clustering methods like K-Means, Hierarchical Clustering, and dimensionality reduction using PCA and LDA.',
      'Real-World Application & Practice: Built classification models, implemented machine learning pipelines, and created interactive dashboards as part of practical, real-world project work.',
    ],
    videos: 12,
    hours: 14,
  },
  {
    title: 'Deep Learning',
    subtitle: 'Basic to Advanced',
    icon: 'DL.png',
    points: [
      'Core ML & Neural Networks: Mastered neural networks fundamentals: supervised learning, activation functions, forward propagation, and gradient descent variants with regularization techniques (L1, L2, dropout).',
      'Hands-On Model Building: Built and trained Artificial Neural Network (ANN) models using TensorFlow and Keras, applying tuning, learning rate schedulers, and model optimization for performance.',
      'Computer Vision & CNNs: Worked on image classification, convolution, pooling, segmentation, and visual intelligence applications including real-world use cases like Nvidia\'s segmentation workflows.',
      'Sequence & Deployment Mastery: Applied RNNs and LSTMs for text, time-series, and sequential data tasks, with deployment strategies aligned to industry standards and production-readiness.',
    ],
    videos: 15,
    hours: 16,
  },
  {
    title: 'AI & Industrial Use Cases',
    subtitle: 'Basic to Advanced',
    icon: 'AI.png',
    points: [
      'AI Basics & Ethics: History, types (ANI, AGI, ASI), industry use cases, responsible AI (ethics, fairness, transparency).',
      'Image & Generative AI: OpenCV (face detection, tracking, segmentation), LLMs, prompt engineering.',
      'Generative AI & LLM Development: In-depth understanding of Large Language Models (LLMs), prompt engineering strategies, and the full lifecycle — from data collection and tokenization to fine-tuning and deployment.',
      'Reinforcement Learning & Real-World Use Cases: Mastery of RL concepts including Supervised Fine-Tuning (SFT) and Reinforcement Learning with Human Feedback (RLHF), along with hands-on engagements using visual pipelines and prompt examples.',
    ],
    videos: 10,
    hours: 10,
  },
];

export default function ProgramBreakdown() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      id="curriculum-outline"
      className={`relative py-24 fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl text-white px-4">
            Curriculum Outline
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 program-breakdown-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-flip-card" style={{ height: '450px' }}>
              <div className="program-flip-card-inner">
                {/* Front Side */}
                <div className="program-flip-card-front glass-card rounded-2xl md:rounded-3xl p-6 flex flex-col items-center justify-center">
                  <img
                    alt={`${program.title} icon`}
                    loading="lazy"
                    width="80"
                    height="80"
                    className="object-contain mb-4 w-16 h-16"
                    src={program.icon}
                  />
                  <h2 className="font-bold text-xl md:text-2xl text-white text-center">
                    {program.title}
                  </h2>
                </div>

                {/* Back Side */}
                <div className="program-flip-card-back backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col justify-center">
                  <h2 className="font-bold text-xl md:text-2xl text-white text-center mb-6">
                    {program.title}
                  </h2>
                  <div className="space-y-3">
                    {program.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                          <Check className="w-3 h-3 text-white stroke-2" />
                        </div>
                        <p className="text-white leading-relaxed font-normal text-xs md:text-sm">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    <div className="flex items-center gap-2 bg-black/30 border rounded-lg py-1 px-4 border-white/20">
                      <Video className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-medium">
                        {program.videos} Video Lectures
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 border rounded-lg py-1 px-4 border-white/20">
                      <Clock className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-medium">
                        {program.hours} Hour Content
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
