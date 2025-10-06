import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const modules = [
  {
    title: 'Simple Chatbot: Build Rule-Based Conversations',
    topics: [
      'Build a rule-based chatbot that interacts using predefined patterns and keywords — a perfect start to NLP and conversational AI development.',
      'User Input Handling & Pattern Recognition: Process and interpret typed messages using Python logic.',
      'Rule-Based Response Generation: Use conditionals or dictionaries to create intelligent chatbot replies.',
      'Text Processing with Python: Learn string operations, greetings detection, and input parsing.',
      'Expandable Functionality: Add support for weather queries, small talk, and custom commands.',
    ],
  },
  {
    title: 'Image Classification using Supervised Learning',
    topics: [
      'Build and evaluate a supervised machine learning model that classifies images using tools like scikit-learn, Pandas, and Matplotlib.',
      'Complete ML Pipeline: Preprocess image data, train using algorithms like Logistic Regression, SVM, XGBoost, and evaluate using metrics like accuracy & confusion matrix.',
      'Tool Integration: Use scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn to build, train, visualize, and analyze model performance.',
      'Hands-On Practice: Apply models on datasets like MNIST or CIFAR-10 using Jupyter or Google Colab, with detailed reporting and visualization.',
    ],
  },
  {
    title: 'Oral Disease Classification using CNN',
    topics: [
      'Build a deep learning model to classify oral diseases from medical images using Convolutional Neural Networks.',
      'Image-Based Diagnosis: Classify oral diseases using a CNN model trained on curated clinical image datasets.',
      'Modular Pipeline: Includes preprocessing, training (train_model.py), and evaluation (evaluate.py) scripts for a complete ML workflow.',
      'Deep Learning Tools: Leverages TensorFlow/Keras with data augmentation and model saving for real-world medical applications.',
    ],
  },
  {
    title: 'Chatbot with Generative Al',
    topics: [
      'Build a conversational AI using GPT models and Prompt Engineering to deliver intelligent, context-aware interactions.',
      'Generative AI Integration: Use GPT-3 or GPT-4 via OpenAI API to create a smart, conversational chatbot.',
      'Prompt Engineering & Fine-Tuning: Design effective prompts for accurate, relevant responses across various topics.',
      'Interactive UI & Deployment: Integrate with Flask/Streamlit for front-end interaction and deploy on platforms like Replit or Heroku.',
    ],
  },
  {
    title: 'Smart Traffic Management System (AI + IoT)',
    topics: [
      'Major Project -Real-time traffic control and emergency management.',
      'AI-Powered Real-Time Traffic Control: Uses deep learning (YOLOv8/SSD) for vehicle detection from video feeds and dynamically adjusts traffic signals based on live traffic density.',
      'Emergency & Forecasting Intelligence: Integrates AI modules to prioritize emergency vehicles and applies ML for traffic prediction using historical data.',
      'Prototype & Simulation Integration: Includes software simulation (OpenCV/SUMO) and optional Raspberry Pi + camera hardware setup to emulate a smart traffic intersection.',
    ],
  },
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      id="curriculum"
      className={`relative py-24 fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-relaxed px-4">
            Build Real-World AI Projects
            <br />
            <span className="block mt-2 sm:mt-4 bg-gradient-to-r from-neo-orange via-neo-yellow to-neo-orange bg-clip-text text-transparent">
              That'll Get You Hired
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A comprehensive 12-week journey from fundamentals to production-ready applications
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neo-orange via-neo-blue to-neo-yellow opacity-50" />

          <div className="space-y-3 sm:space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="relative"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full glass-card glass-card-hover p-4 sm:p-6 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 sm:gap-6 flex-1">
                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300 ${openIndex === index
                          ? 'bg-neo-orange text-white shadow-lg shadow-neo-orange/50'
                          : 'bg-white/5 text-gray-400 border border-white/10'
                          }`}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-neo-orange transition-colors duration-300 leading-tight">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="ml-4 sm:ml-8 mt-2 glass-card p-4 sm:p-6 space-y-3 animate-slide-in">
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
      </div>
    </section>
  );
}