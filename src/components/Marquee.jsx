import React from 'react';

const techStack = [
  'Snowflake', 'AWS', 'Azure', 'React', 'Node.js', 'Python',
  'PostgreSQL', 'Docker', 'Kubernetes', 'TensorFlow', 'Framer'
];

const Marquee = () => {
  return (
    <div className="w-full py-12 bg-darkBg border-y border-glassBorder overflow-hidden relative flex items-center">
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-darkBg to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-darkBg to-transparent z-10"></div>

      <div className="flex w-fit animate-marquee whitespace-nowrap items-center space-x-12">
        {/* Double array for seamless loop */}
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <span 
            key={index} 
            className="text-2xl md:text-4xl font-black tracking-wider text-transparent bg-clip-text"
            style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
