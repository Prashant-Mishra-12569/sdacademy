import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const TeachersSlider = ({ teachers }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Super fast for mobile - reduced to 0.5 seconds
  const duration = isMobile ? 0.5 : 25;

  return (
    <div 
      className="relative overflow-hidden" 
      ref={containerRef}
    >
      <motion.div
        className="flex gap-4 py-4 optimize-gpu"
        animate={{
          x: [0, '-50%']
        }}
        transition={{
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          stiffness: 200, // Increased for faster response
          damping: 5 // Reduced for faster movement
        }}
        style={{
          willChange: 'transform'
        }}
      >
        {/* First set of teachers */}
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden"
            style={{
              contain: 'paint layout'
            }}
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{teacher.name}</h3>
              <p className="text-gray-600 text-sm">{teacher.subject}</p>
            </div>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {teachers.map((teacher, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden"
            style={{
              contain: 'paint layout'
            }}
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{teacher.name}</h3>
              <p className="text-gray-600 text-sm">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}; 