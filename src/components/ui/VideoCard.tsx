
import React, { useState } from 'react';
import { Play, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  date: string;
  views: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  description,
  thumbnailUrl,
  duration,
  date,
  views,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl bg-white h-full hover-scale",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-sm">
          <span className="flex items-center bg-black/60 px-2 py-1 rounded">
            <Clock size={14} className="mr-1" />
            {duration}
          </span>
          <span className="flex items-center">
            {views} views
          </span>
        </div>

        <div 
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-16 h-16 rounded-full bg-odia-vermilion/90 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 cursor-pointer">
            <Play size={30} className="text-white ml-1" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
    </div>
  );
};

export default VideoCard;
