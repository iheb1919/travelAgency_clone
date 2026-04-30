import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './LazyImage.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  loading?: "lazy" | "eager";
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = "lazy"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px', // Start loading when 200px away from viewport
    skip: loading === "eager"
  });

  const shouldShow = loading === "eager" || inView;

  return (
    <div 
      ref={ref} 
      className={`lazy-image-container ${className} ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      style={{ width, height }}
    >
      {shouldShow && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={`lazy-image ${isLoaded ? 'visible' : 'hidden'}`}
        />
      )}
      {!isLoaded && <div className="shimmer-overlay" />}
    </div>
  );
};

export default LazyImage;
