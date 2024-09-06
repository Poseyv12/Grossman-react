import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedBox = styled(Box)(({ theme, animate }) => ({
  opacity: animate ? 1 : 0,
  transform: animate ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  animation: animate ? `${fadeInUp} 0.6s ease-out` : 'none',
}));

const AnimatedSection = ({ children, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <AnimatedBox ref={ref} animate={isVisible} {...props}>
      {children}
    </AnimatedBox>
  );
};

export default AnimatedSection;
