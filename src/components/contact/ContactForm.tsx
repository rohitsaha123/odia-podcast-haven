
import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        duration: 5000,
      });
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-odia-gold/10 text-odia-gold text-sm font-medium mb-3">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-odia-dark mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Have a question, suggestion, or interested in collaborating with us? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <ContactInfo 
                icon={<Mail size={20} />} 
                title="Email Us" 
                content="info@odiacast.com"
                link="mailto:info@odiacast.com"
              />
              <ContactInfo 
                icon={<Phone size={20} />} 
                title="Call Us" 
                content="+91 123 456 7890"
                link="tel:+911234567890"
              />
              <ContactInfo 
                icon={<MapPin size={20} />} 
                title="Visit Us" 
                content="Bhubaneswar, Odisha, India"
                link="https://maps.google.com"
              />
            </div>

            <div className="mt-10">
              <h3 className="font-display text-lg font-medium text-odia-dark mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <SocialButton href="https://youtube.com" label="YouTube" className="bg-red-600 hover:bg-red-700">
                  YouTube
                </SocialButton>
                <SocialButton href="https://instagram.com" label="Instagram" className="bg-purple-600 hover:bg-purple-700">
                  Instagram
                </SocialButton>
                <SocialButton href="https://twitter.com" label="Twitter" className="bg-blue-500 hover:bg-blue-600">
                  Twitter
                </SocialButton>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover-scale transition-all duration-500">
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-odia-dark mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="focus-ring w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="focus-ring w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="focus-ring w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="focus-ring w-full resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-odia-vermilion hover:bg-odia-vermilion/90 text-white hover-scale"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start space-x-4 group hover-scale"
    >
      <div className="w-10 h-10 rounded-full bg-odia-earth/10 text-odia-earth flex items-center justify-center mt-1 group-hover:bg-odia-earth group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-odia-dark">{title}</h4>
        <p className="text-gray-600 group-hover:text-odia-vermilion transition-colors duration-300">
          {content}
        </p>
      </div>
    </a>
  );
};

interface SocialButtonProps {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, label, className, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium hover-scale focus-ring transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default ContactForm;
