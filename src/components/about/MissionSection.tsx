
import React, { useEffect, useRef } from 'react';

const MissionSection = () => {
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
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-odia-gold/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-odia-vermilion/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-xl reveal">
                <img 
                  src="https://images.unsplash.com/photo-1595361315994-347051193aa1?q=80&w=1974" 
                  alt="Our mission"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg reveal reveal-delay-2">
                <p className="font-display text-lg text-odia-dark">
                  "Preserving our heritage through stories"
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-odia-vermilion/10 text-odia-vermilion text-sm font-medium mb-2 reveal">
              Our Purpose
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-odia-dark reveal">
              Our Mission & Vision
            </h2>
            
            <div className="space-y-4 reveal reveal-delay-1">
              <p className="text-gray-600 leading-relaxed">
                OdiaCast was born from a passion to preserve and promote the rich cultural heritage of Odisha. We believe that stories have the power to connect generations and transcend boundaries.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our mission is to create a platform where the Odia language thrives in the digital age, where cultural narratives are documented for future generations, and where meaningful conversations spark curiosity and understanding.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                We envision a global community engaged with Odia culture, where our content serves as a bridge between tradition and modernity, between the local and the global.
              </p>
            </div>
            
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 reveal reveal-delay-2">
              <div className="bg-odia-light p-5 rounded-lg border border-gray-100">
                <h3 className="font-display text-lg font-semibold text-odia-dark mb-2">Cultural Preservation</h3>
                <p className="text-gray-600 text-sm">Documenting and highlighting various aspects of Odia culture, traditions, and heritage.</p>
              </div>
              
              <div className="bg-odia-light p-5 rounded-lg border border-gray-100">
                <h3 className="font-display text-lg font-semibold text-odia-dark mb-2">Language Promotion</h3>
                <p className="text-gray-600 text-sm">Encouraging the use and appreciation of the Odia language across different domains.</p>
              </div>
              
              <div className="bg-odia-light p-5 rounded-lg border border-gray-100">
                <h3 className="font-display text-lg font-semibold text-odia-dark mb-2">Community Building</h3>
                <p className="text-gray-600 text-sm">Creating connections among Odia speakers worldwide and fostering cultural exchange.</p>
              </div>
              
              <div className="bg-odia-light p-5 rounded-lg border border-gray-100">
                <h3 className="font-display text-lg font-semibold text-odia-dark mb-2">Knowledge Sharing</h3>
                <p className="text-gray-600 text-sm">Providing a platform for experts and enthusiasts to share insights about Odisha.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
