import { Linkedin, Youtube, Link, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <footer 
      ref={elementRef}
      className={`relative bg-neo-dark border-t border-white/10 fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <img src="/myeq.png" alt="MyEQ Logo" className="h-10" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of software developers through
              world-class education and mentorship.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#overview" className="hover:text-white transition-colors duration-300">
                  Overview
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors duration-300">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#mentors" className="hover:text-white transition-colors duration-300">
                  Mentors
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors duration-300">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://myequation.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/my-equation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@myequation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@MyEquation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/my-equation/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/myequation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://linktr.ee/MyEquation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Linktree"
              >
                <Link className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://medium.com/@myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Medium"
              >
                <span className="text-gray-400 hover:text-white transition-colors font-bold text-lg">M</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            © 2025 MyEquation, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
