
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MissionSection from '@/components/about/MissionSection';
import TeamSection from '@/components/about/TeamSection';

const About = () => {
  // Initialize scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-odia-vermilion to-odia-gold py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-white text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About OdiaCast
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80 animate-fade-in">
              Discover the story behind our podcast and the team dedicated to celebrating and preserving Odia culture.
            </p>
          </div>
        </div>
        
        <MissionSection />
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
