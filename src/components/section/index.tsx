'use client';

import useOnScreen from '@/hooks/useOnScreen';
import React, { useEffect, useRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px'); // Điều chỉnh rootMargin nếu cần

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`
        transition duration-700 transform
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Section;
