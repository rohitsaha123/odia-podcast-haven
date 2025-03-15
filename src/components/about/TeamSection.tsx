
import React, { useEffect, useRef } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Aditya Pattnaik',
    role: 'Host & Founder',
    bio: 'A passionate storyteller with over 10 years of experience in media and journalism, Aditya founded OdiaCast to bring Odia stories to a global audience.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    social: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Priya Mahapatra',
    role: 'Content Director',
    bio: 'With a background in cultural studies and film production, Priya curates and develops content that authentically represents Odia culture and narratives.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
    social: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Raj Kumar Mohanty',
    role: 'Technical Producer',
    bio: 'A sound engineer and digital media specialist, Raj ensures that each episode maintains the highest quality standards across all platforms.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974',
    social: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Sunita Das',
    role: 'Research Associate',
    bio: 'An academician specializing in Odia literature and folklore, Sunita brings depth and authenticity to the podcast through her extensive research.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976',
    social: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
];

const TeamSection = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-odia-gold/10 text-odia-gold text-sm font-medium mb-3">
            The People
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-odia-dark mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind OdiaCast, dedicated to bringing the best of Odia culture, stories, and conversations to our listeners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`reveal ${index % 4 === 0 ? 'reveal-delay-1' : index % 4 === 1 ? 'reveal-delay-2' : index % 4 === 2 ? 'reveal-delay-3' : 'reveal-delay-4'}`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <div className="overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-3">
                        <SocialIcon href={member.social.twitter} icon={<Twitter size={16} />} />
                        <SocialIcon href={member.social.instagram} icon={<Instagram size={16} />} />
                        <SocialIcon href={member.social.linkedin} icon={<Linkedin size={16} />} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-odia-dark">{member.name}</h3>
                  <p className="text-odia-vermilion text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/80 hover:text-odia-vermilion flex items-center justify-center transition-colors duration-300 text-white"
    >
      {icon}
    </a>
  );
};

export default TeamSection;
