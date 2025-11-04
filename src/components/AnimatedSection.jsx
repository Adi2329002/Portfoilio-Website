// src/components/AnimatedSection.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';

// This component will wrap your other components (like AboutMe, Projects)
const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // You can uncomment this if you only want it to animate ONCE
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    // We attach the 'ref' here.
    // When 'ref' is in view, 'inView' becomes true.
    // We then change the className from 'hidden' to 'visible'.
    <div ref={ref} className={`section-hidden ${inView ? 'section-visible' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;