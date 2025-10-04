import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Martinez',
    role: 'Software Engineer at Google',
    content:
      'This program completely transformed my career. The mentorship was invaluable, and the hands-on projects gave me the confidence to land my dream job.',
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Jessica Lee',
    role: 'Full-Stack Developer at Amazon',
    content:
      'The curriculum is incredibly well-structured. I went from knowing basic HTML to building complex full-stack applications in just 12 weeks.',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Ryan Taylor',
    role: 'Tech Lead at Startup',
    content:
      'Best investment I ever made in my career. The community support and expert guidance helped me transition from a different field into tech.',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Frontend Engineer at Meta',
    content:
      'The project-based learning approach is what sets this program apart. I built a portfolio that impressed every interviewer I spoke with.',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'DevOps Engineer at Netflix',
    content:
      'The depth of knowledge I gained here is incredible. The mentors really care about your success and go above and beyond to help you.',
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="relative py-24 bg-neo-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our graduates who are now thriving in their tech careers
          </p>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 glass-card p-8 hover:scale-105 transition-all duration-300 select-none"
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

            <p className="text-gray-300 mb-6 leading-relaxed text-lg min-h-[120px]">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-neo-orange/30"
                loading="lazy"
              />
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          Scroll horizontally or drag to see more testimonials
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
