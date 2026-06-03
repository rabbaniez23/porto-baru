import React, { useEffect, useRef, useState } from 'react';

export const LazyVideo = ({ src, className, type = 'video/mp4', poster = '', ...props }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // In viewport: load source if not already loaded, and play
            setIsLoaded(true);
            videoElement.play().catch((err) => {
              // Ignore autoplay/play interruption errors
              console.log('Autoplay interrupted:', err);
            });
          } else {
            // Out of viewport: pause to save CPU/GPU resources
            videoElement.pause();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading slightly before entering viewport
        threshold: 0.05,
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      style={{ willChange: 'transform, opacity' }}
      {...props}
    >
      {isLoaded && <source src={src} type={type} />}
    </video>
  );
};

export default LazyVideo;
