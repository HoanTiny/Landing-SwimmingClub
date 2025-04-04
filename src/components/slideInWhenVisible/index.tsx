// SlideInWhenVisible.tsx
'use client';
import useOnScreen from '@/hooks/useOnScreen';
import React, { useRef } from 'react';

interface SlideInWhenVisibleProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  rootMargin?: string; // tuỳ chỉnh nếu muốn
}

const SlideInWhenVisible: React.FC<SlideInWhenVisibleProps> = ({
  children,
  direction = 'left',
  className = '',
  rootMargin = '-100px',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, rootMargin);

  // Nếu trượt từ trái -> dùng "-translate-x-24"
  // Nếu trượt từ phải -> dùng "translate-x-24"
  const translateClass =
    direction === 'left' ? '-translate-x-[200px]' : 'translate-x-[200px]';

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out 
        opacity-0 
        
        ${isVisible ? 'opacity-100 translate-x-0' : translateClass} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default SlideInWhenVisible;
