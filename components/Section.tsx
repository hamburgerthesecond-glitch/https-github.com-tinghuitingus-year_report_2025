import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<Props> = ({ children, className = "", id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.15, // Trigger when 15% of the section is visible
        rootMargin: "-50px"
      } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`min-h-screen w-full flex flex-col justify-center items-center px-4 py-16 md:px-12 relative ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl w-full z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;