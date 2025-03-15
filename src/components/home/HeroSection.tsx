
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  videoId: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoId }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 bg-odia-dark overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1584824283170-b15942d3825d?q=80&w=1974')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-odia-dark via-odia-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-odia-gold/20 text-odia-gold text-sm font-medium mb-2 animate-fade-in">
              Latest Episode
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Exploring Stories in 
              <span className="text-gradient"> Odia</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-fade-in">
              Join us as we dive into the rich heritage, culture, and stories of Odisha through engaging conversations with notable personalities.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-odia-vermilion hover:bg-odia-vermilion/90 text-white hover-scale"
              >
                Subscribe Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 hover-scale"
              >
                Browse Episodes
              </Button>
            </div>
          </div>

          <div className="lg:px-6 animate-fade-in-right">
            <div className="relative rounded-lg overflow-hidden shadow-2xl hover-scale transition-all duration-500 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-odia-vermilion/20 to-odia-gold/20 z-10 pointer-events-none"></div>
              <div className="video-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                  title="Featured Podcast Episode"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center lg:justify-start text-white/80">
              <Play size={18} className="text-odia-gold mr-2" />
              <span>Watch our latest episode now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-1 animate-pulse-gentle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
