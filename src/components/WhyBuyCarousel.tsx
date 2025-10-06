import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Badge, Wrench, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const carouselItems = [
    {
        icon: Users,
        title: 'Flexible Learning & Lifetime Access',
        description: '100% self-paced. Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources'
    },
    {
        icon: Badge,
        title: 'Verified Certificate of Completion',
        description: 'Industry-Endorsed Certificate of Completion Showcase your skills on LinkedIn, GitHub, and your resume.'
    },
    {
        icon: Wrench,
        title: 'Industry-Grade Tools, Real Skills',
        description: 'Work with TensorFlow, PyTorch, Scikit-learn & more Display with Flask, Streamlit & ML Ops tools'
    },
    {
        icon: Target,
        title: 'Tailored for All Backgrounds',
        description: 'Whether you\'re a beginner, engineer, student, or career switcher — this course adapts to your learning curve and goals'
    },
    {
        icon: Users,
        title: 'Mentorship from Top Industry Experts',
        description: 'Built by experts to match current industry demand, helping you land internships & jobs faster'
    },
    {
        icon: Badge,
        title: 'Zero to Pro: All-in-One Curriculum',
        description: 'Learn directly from professionals at NVIDIA &IBM, gaining insights grounded in real-world AI development not just theory.'
    },
    {
        icon: Wrench,
        title: 'Build Real Projects, Deploy with Confidence',
        description: 'Go from Python basics to advanced AI—all in one place. No need for multiple courses.'
    },
    {
        icon: Target,
        title: 'Career-Focused, Industry-Approved',
        description: 'Bonus FYI videos on career paths, job roles, and AI job market trends. Understand what recruiters and companies actually look for.'
    }
];

export default function WhyBuyCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transform, setTransform] = useState('');
    const [enhancedTransform, setEnhancedTransform] = useState('');
    const { elementRef, isVisible } = useScrollAnimation();

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / centerY * -10;
        const rotateY = (x - centerX) / centerX * 10;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
    };

    const handleMouseLeave = () => {
        setTransform('');
    };

    const handleEnhancedMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / centerY * -15;
        const rotateY = (x - centerX) / centerX * 15;

        setEnhancedTransform(`rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale3d(1.1, 1.1, 1.1) translateZ(50px)`);
    };

    const handleEnhancedMouseLeave = () => {
        setEnhancedTransform('rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1) translateZ(0px)');
    };



    return (
        <section 
            ref={elementRef}
            className={`relative py-24 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-4">
                        Why you should <span className="text-neo-yellow">Buy this Program</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
                        {Array.from({ length: 4 }, (_, i) => {
                            const cardIndex = (currentIndex + i) % carouselItems.length;
                            const item = carouselItems[cardIndex];
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={`${currentIndex}-${i}`}
                                    className="glass-card p-3 sm:p-4 h-48 sm:h-56 flex flex-col transition-all duration-300 hover:bg-white/10"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 mb-3">
                                        <IconComponent className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-relaxed flex-1">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Certificates Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
                <div className="text-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 px-4">
                        Certificates awarded in partnership with
                    </h3>
                    <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-16">
                        <div className="flex-shrink-0">
                            <img
                                src="nvidia-logo.7cf087b8.png"
                                alt="Certificate Partner 1"
                                className="h-12 sm:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                        <div className="w-px h-12 sm:h-16 lg:h-20 bg-white/20"></div>
                        <div className="flex-shrink-0">
                            <img
                                src="ibm-logo-white.952f2184.png"
                                alt="Certificate Partner 2"
                                className="h-12 sm:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                    {/* Enhanced 3D Certificate Card */}
                    <div className="py-5 sm:py-10 flex items-center justify-center mt-8" style={{ perspective: '1500px' }}>
                        <div
                            className="flex items-center justify-center relative transition-all duration-300 ease-out cursor-pointer"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: enhancedTransform
                            }}
                            onMouseMove={handleEnhancedMouseMove}
                            onMouseLeave={handleEnhancedMouseLeave}
                        >
                            <div className="[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50/10 relative group/card hover:shadow-2xl hover:shadow-neo-orange/20 bg-gray-950/60 border-white/20 border-black/10 w-auto sm:w-[90vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] h-auto rounded-xl p-1 sm:p-3 md:p-6 border backdrop-blur-sm transition-all duration-300">
                                <div
                                    className="transition duration-300 ease-out w-full p-4"
                                    style={{
                                        transform: 'translateX(0px) translateY(0px) translateZ(20px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
                                    }}
                                >
                                    <img
                                        alt="Enhanced Certificate"
                                        loading="lazy"
                                        width="7200"
                                        height="5086"
                                        decoding="async"
                                        className="object-cover rounded-xl group-hover/card:shadow-2xl group-hover/card:shadow-neo-orange/30 w-full h-auto transition-all duration-300"
                                        src="Certificate.png"
                                    />
                                </div>
                            </div>

                            {/* Floating particles effect */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neo-orange/60 rounded-full animate-pulse"></div>
                                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neo-yellow/60 rounded-full animate-pulse delay-150"></div>
                                <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}