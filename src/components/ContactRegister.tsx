import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: 'beginner',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      ref={elementRef}
      id="register" 
      className={`relative py-24 bg-neo-charcoal fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Fill out the form below and our admissions team will get in touch with you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="glass-card p-8 pl-16 mb-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 pr-2 -mt-2">
                    <Mail className="w-6 h-6 text-neo-orange" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">info@myequation.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 pr-2 -mt-2">
                    <Phone className="w-6 h-6 text-neo-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">Gunesh  - 88068 06479</p>
                    <p className="text-gray-400">Kaustuv - 93378 37362</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 pr-2 -mt-2">
                    <MapPin className="w-6 h-6 text-neo-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Atal-Kalam Building,</p>
                    <p className="text-gray-400">Opp. GUSEC, Ahmedabad,</p>
                    <p className="text-gray-400">Gujarat 380009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="glass-card p-8 h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neo-orange focus:ring-2 focus:ring-neo-orange/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neo-orange focus:ring-2 focus:ring-neo-orange/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neo-orange focus:ring-2 focus:ring-neo-orange/20 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`w-full btn-primary flex items-center justify-center gap-2 ${isSubmitting || submitSuccess ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : submitSuccess ? (
                  <>Application Submitted!</>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="p-4 bg-neo-orange/10 border border-neo-orange/20 rounded-lg">
                  <p className="text-white text-center">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
