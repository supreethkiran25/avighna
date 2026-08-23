import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "12+", "18–20%", "-5% to -15%", "500+"
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className = '' }) => {
  const [displayValue, setDisplayValue] = useState<string>(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Extract primary number if possible
          const match = value.match(/\d+/);
          if (match) {
            const targetNum = parseInt(match[0], 10);
            const duration = 1200;
            const startTime = performance.now();

            const updateNumber = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out cubic
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(easeProgress * targetNum);

              // Reconstruct string
              const animatedStr = value.replace(match[0], current.toString());
              setDisplayValue(animatedStr);

              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(updateNumber);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
