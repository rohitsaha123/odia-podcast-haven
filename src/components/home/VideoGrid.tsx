
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import VideoCard from '../ui/VideoCard';
import { Button } from '@/components/ui/button';

// Sample video data (in a real app, this would come from an API)
const videos = [
  {
    id: 'abc123',
    title: 'The History of Odia Literature and Its Impact on Modern Culture',
    description: 'A deep dive into the rich literary traditions of Odisha and how they continue to shape contemporary cultural expressions.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551823934-3d9d2e422f85?q=80&w=2069',
    duration: '18:42',
    date: 'Apr 15, 2023',
    views: '12K'
  },
  {
    id: 'def456',
    title: 'Exploring the Jagannath Temple: Traditions and Mysteries',
    description: 'An exclusive look into the sacred traditions, architecture, and spiritual significance of the iconic Jagannath Temple.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1625383207989-1b806a5488e2?q=80&w=2070',
    duration: '24:15',
    date: 'Mar 28, 2023',
    views: '18K'
  },
  {
    id: 'ghi789',
    title: 'The Evolution of Odia Cinema Through Decades',
    description: 'Tracing the journey of Odia cinema from its humble beginnings to its current state, featuring interviews with prominent filmmakers.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056',
    duration: '32:09',
    date: 'Feb 12, 2023',
    views: '9.5K'
  },
  {
    id: 'jkl101',
    title: 'Traditional Odia Cuisine: A Culinary Journey',
    description: 'Discover the unique flavors, techniques, and cultural significance behind Odisha's most beloved dishes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    duration: '21:30',
    date: 'Jan 25, 2023',
    views: '15K'
  },
  {
    id: 'mno112',
    title: 'The Art of Pattachitra: Preserving an Ancient Tradition',
    description: 'Meet the artists keeping the ancient Odia art form of Pattachitra alive and how they're adapting it for modern audiences.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582561833070-5187a8ac2c40?q=80&w=1974',
    duration: '27:18',
    date: 'Dec 08, 2022',
    views: '7.8K'
  },
  {
    id: 'pqr131',
    title: 'Odisha's Dance Forms: The Rhythm of Culture',
    description: 'An exploration of the classical and folk dance traditions of Odisha, featuring demonstrations and expert commentary.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1535436113207-13b1d3e0d7d1?q=80&w=1974',
    duration: '34:22',
    date: 'Nov 14, 2022',
    views: '11K'
  }
];

const VideoGrid = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-odia-earth/10 text-odia-earth text-sm font-medium mb-3">
            Our Collection
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-odia-dark mb-4">
            Explore Popular Episodes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into our most-watched conversations that highlight the richness of Odia culture, language, and stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className={`reveal ${index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'}`}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-odia-earth text-odia-earth hover:bg-odia-earth/10 hover-scale focus-ring"
          >
            View All Episodes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
