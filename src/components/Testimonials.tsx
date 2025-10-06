import { useState, useRef, useEffect } from 'react';
import { Star, Quote, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content:
      'Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch.',
    extendedContent:
      "Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch. As a product manager, I needed to understand AI/ML concepts to better collaborate with technical teams. This course provided exactly what I needed - a perfect balance of theory and practical knowledge. The assignments were challenging yet achievable, and the feedback was constructive and timely.",
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Data Scientist',
    content:
      'Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML career advancement.',
    extendedContent:
      'Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML career advancement. The course methodology was innovative, combining lectures, workshops, and peer collaboration. The capstone project allowed me to showcase everything I learned and build a portfolio piece. The career support and networking opportunities were additional benefits that made this investment worthwhile.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Research Scientist',
    content:
      'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech.',
    extendedContent:
      'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech. Coming from a non-technical background, I was initially intimidated, but the program\'s supportive environment made all the difference. The mentors understood the challenges of career changers and provided personalized guidance throughout the journey. The curriculum was designed to build confidence gradually - starting with fundamentals and progressing to advanced topics at a comfortable pace. The peer learning aspect was incredible; study groups and pair programming sessions helped reinforce concepts and build lasting professional relationships. The program also included soft skills training, which was crucial for my transition into a leadership role. Within six months of graduation, I was promoted to Tech Lead, largely due to the comprehensive skill set and confidence I gained from this program.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Frontend Engineer at Meta',
    content:
      'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with.',
    extendedContent:
      'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with. Instead of just completing exercises, we worked on real-world projects that solved actual business problems. Each project introduced new technologies and concepts while reinforcing previous learning. My favorite project was building a social media analytics dashboard using React, D3.js, and machine learning APIs. The attention to detail in project requirements mirrored what I encounter in my current role at Meta. The code review process was particularly valuable - instructors provided detailed feedback on code quality, performance optimization, and best practices. By graduation, I had five polished projects that demonstrated my ability to work with different technologies and solve complex problems. The portfolio review sessions helped me present my work effectively, and the career services team connected me with Meta recruiters who were impressed by the quality and depth of my projects.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'DevOps Engineer at Netflix',
    content:
      'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you.',
    extendedContent:
      'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you. The program covered not just coding, but the entire software development lifecycle. We learned about containerization with Docker, orchestration with Kubernetes, and cloud deployment on AWS and Azure. The DevOps modules were particularly comprehensive, covering CI/CD pipelines, monitoring, and infrastructure as code. What impressed me most was how the mentors made themselves available beyond regular hours. They provided one-on-one sessions to help with challenging concepts and career planning. The hands-on labs simulated real production environments, giving me experience with the tools and practices I use daily at Netflix. The program also emphasized the importance of documentation and communication skills, which have been crucial in my current role. The alumni network has been invaluable for career growth and staying updated with industry trends.',
    rating: 5,
  },
  {
    name: 'Alex Martinez',
    role: 'Software Engineer at Google',
    content:
      'Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect.',
    extendedContent:
      'Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect. The curriculum was cutting-edge, covering the latest developments in AI and machine learning. The lab sessions were particularly impressive, allowing us to work with real datasets and industry-standard tools. The instructors brought years of industry experience, making the learning both theoretical and practical.',
    rating: 5,
  },
  {
    name: 'Jessica Lee',
    role: 'Full-Stack Developer at Amazon',
    content:
      'The curriculum is incredibly well-structured. I went from knowing basic HTML to building complex full-stack applications in just 12 weeks.',
    rating: 5,
  },
  {
    name: 'Ryan Taylor',
    role: 'Tech Lead at Startup',
    content:
      'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Frontend Engineer at Meta',
    content:
      'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'DevOps Engineer at Netflix',
    content:
      'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Frontend Engineer at Meta',
    content:
      'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'DevOps Engineer at Netflix',
    content:
      'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you.',
    rating: 5,
  },
];

const videoTestimonials = [
  'video-testimonials/Ajinkya.mp4',
  'video-testimonials/Haadi-Akhter.mp4',
  'video-testimonials/Hardik.mp4',
  'video-testimonials/Kerry.mp4',
  'video-testimonials/Pritha.mp4',
  'video-testimonials/Rashmi.mp4',
  'video-testimonials/Supriyam-Mohanty.mp4',
  'video-testimonials/Unmona.mp4',
];

const whatsappScreenshots = [
  'Whatsapp ss/1.png',
  'Whatsapp ss/2.png',
  'Whatsapp ss/3.png',
  'Whatsapp ss/4.png',
  'Whatsapp ss/5.png',
  'Whatsapp ss/6.png',
  'Whatsapp ss/7.png',
  'Whatsapp ss/8.png',
  'Whatsapp ss/9.png',
  'Whatsapp ss/10.png',
  'Whatsapp ss/11.png',
  'Whatsapp ss/12.png',
];

function VideoPlayer({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        muted={isMuted}
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Central Play Button */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
          >
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </button>
        </div>
      )}

      {/* Video Controls */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-lg transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-2 text-white text-sm">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="hover:bg-white/20 p-1 rounded transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Timestamp */}
          <span className="text-xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="flex-1" />

          {/* Volume Button */}
          <button
            onClick={toggleMute}
            className="hover:bg-white/20 p-1 rounded transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="hover:bg-white/20 p-1 rounded transition-colors"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [isImagePaused, setIsImagePaused] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation();

  const openModal = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section
      ref={elementRef}
      className={`relative py-24 overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Hear from our graduates who are now thriving in their tech careers
          </p>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex gap-6 animate-scroll ${isPaused ? 'paused' : ''}`}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 glass-card p-6 sm:p-8 transition-all duration-300 select-none"
            >
              <Quote className="w-10 h-10 text-neo-orange mb-4 opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-neo-yellow fill-neo-yellow"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-lg min-h-[120px]">
                "{testimonial.content}"
              </p>

              <button
                onClick={() => openModal(testimonial)}
                className="text-neo-orange hover:text-neo-yellow transition-colors duration-300 text-sm font-medium mb-4"
              >
                Read More
              </button>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-14 h-14 rounded-full bg-neo-orange/20 ring-2 ring-neo-orange/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="mt-24">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsVideoPaused(true)}
          onMouseLeave={() => setIsVideoPaused(false)}
        >
          <div className={`flex gap-6 animate-scroll-reverse ${isVideoPaused ? 'paused' : ''}`}>
            {[...videoTestimonials, ...videoTestimonials].map((videoSrc, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 h-44 sm:h-48 glass-card p-2 transition-all duration-300 select-none"
              >
                <VideoPlayer src={videoSrc} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Screenshots Section */}
      <div className="mt-24">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsImagePaused(true)}
          onMouseLeave={() => setIsImagePaused(false)}
        >
          <div className={`flex gap-6 animate-scroll-left-to-right ${isImagePaused ? 'paused' : ''}`}>
            {[...whatsappScreenshots, ...whatsappScreenshots].map((imageSrc, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 sm:w-64 h-80 sm:h-96 glass-card p-2 transition-all duration-300 select-none"
              >
                <img
                  src={imageSrc}
                  alt={`WhatsApp feedback ${index + 1}`}
                  className="w-full h-full object-cover hover:object-contain rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-75 group-hover:z-50 relative"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 25s linear infinite;
        }

        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 35s linear infinite;
        }
        
        .animate-scroll.paused,
        .animate-scroll-reverse.paused,
        .animate-scroll-left-to-right.paused {
          animation-play-state: paused;
        }
      `}</style>

      {isModalOpen && selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
            <div
              className="glass-card p-6 sm:p-8 max-w-xl w-full max-h-[67vh] modal-content modal-scroll"
              onClick={handleModalContentClick}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Full Testimonial</h3>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-white text-xl">×</span>
                </button>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-neo-yellow fill-neo-yellow"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-base">
                "{selectedTestimonial.extendedContent}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-14 h-14 rounded-full bg-neo-orange/20 ring-2 ring-neo-orange/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {selectedTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{selectedTestimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{selectedTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
