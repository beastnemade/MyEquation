import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
    {
        question: "How long is this program?",
        answer: "The program consists of 55+ hours of pre-recorded lectures which you can watch at your own pace."
    },
    {
        question: "What prerequisites do I need?",
        answer: "Basic programming knowledge is helpful but not required. We start from the fundamentals."
    },
    {
        question: "Do I get a certificate upon completion?",
        answer: "Yes, you'll receive a verified certificate that you can add to your LinkedIn profile and resume."
    },
    {
        question: "Is there lifetime access to the course?",
        answer: "Yes, once you enroll, you get lifetime access to all course materials and future updates."
    },
    {
        question: "What kind of support do I get?",
        answer: "You get access to our community forum, weekly Q&A sessions, and direct instructor support."
    },
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section
            ref={elementRef}
            className={`relative py-24 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-relaxed px-4">
                        Frequently Asked
                        <br />
                        <span className="block mt-2 sm:mt-4 bg-gradient-to-r from-neo-orange via-neo-blue to-neo-yellow bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Get answers to the most common questions about our AI program
                    </p>
                </div>

                <div className="relative">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="relative"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full glass-card glass-card-hover p-4 sm:p-6 text-left flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3 sm:gap-6 flex-1">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-neo-orange to-neo-yellow flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-neo-orange transition-colors duration-300 leading-tight">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        {openIndex === index ? (
                                            <ChevronUp className="w-6 h-6 text-neo-orange" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-neo-orange transition-colors duration-300" />
                                        )}
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="ml-8 sm:ml-[4.5rem] mr-4 sm:mr-6 pb-4 sm:pb-6 animate-in slide-in-from-top-2 duration-300">
                                        <div className="glass-card p-4 sm:p-6 mt-4">
                                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
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