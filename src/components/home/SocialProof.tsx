
import React, { useEffect, useRef, useState } from 'react';
import { Play, Users, Award, Star } from 'lucide-react';

const stats = [
  {
    value: '150+',
    label: 'Episodes',
    icon: Play,
    color: 'text-odia-vermilion',
    bgColor: 'bg-odia-vermilion/10',
  },
  {
    value: '50K+',
    label: 'Subscribers',
    icon: Users,
    color: 'text-odia-gold',
    bgColor: 'bg-odia-gold/10',
  },
  {
    value: '25+',
    label: 'Notable Guests',
    icon: Award,
    color: 'text-odia-earth',
    bgColor: 'bg-odia-earth/10',
  },
  {
    value: '4.9',
    label: 'Average Rating',
    icon: Star,
    color: 'text-odia-leaf',
    bgColor: 'bg-odia-leaf/10',
  },
];

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countedStats, setCountedStats] = useState<{ [key: number]: string }>({});
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (!hasAnimated) {
              animateNumbers();
              setHasAnimated(true);
            }
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
  }, [hasAnimated]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let startValue = 0;
      const endValue = parseInt(stat.value.replace(/[^0-9.-]+/g, ""));
      
      if (isNaN(endValue)) {
        setCountedStats(prev => ({ ...prev, [index]: stat.value }));
        return;
      }
      
      const suffix = stat.value.replace(/[0-9.-]+/g, "");
      const duration = 2000;
      const increment = Math.ceil(endValue / (duration / 20));
      
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          clearInterval(timer);
          startValue = endValue;
        }
        setCountedStats(prev => ({ ...prev, [index]: `${startValue}${suffix}` }));
      }, 20);
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-odia-dark text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-3">
            By The Numbers
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            The Impact of <span className="text-gradient">OdiaCast</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Since our inception, we've been dedicated to promoting and preserving Odia culture through engaging content. Here's what we've achieved together with our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center reveal ${`reveal-delay-${index + 1}`}`}
            >
              <div className={`${stat.bgColor} ${stat.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {countedStats[index] || stat.value}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/10 text-center reveal">
          <blockquote className="font-display text-xl md:text-2xl text-gray-200 italic max-w-4xl mx-auto">
            "OdiaCast has become a vital platform for preserving and promoting our cultural heritage in the digital age. Their thoughtful conversations and dedication to the Odia language are truly commendable."
          </blockquote>
          <div className="mt-4 text-sm text-gray-400">
            — Dr. Pratap Keshari Mishra, Cultural Historian
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
