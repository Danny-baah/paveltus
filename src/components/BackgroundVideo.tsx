import React, { useRef, useEffect, useState } from 'react';

interface BackgroundVideoProps {
  videoSrc?: string;
  posterSrc?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc = '/hero-video.mp4',
  posterSrc = '/hero-poster.jpg',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly enforce muted and playsInline to ensure autoplay succeeds across all browsers
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Autoplay prevented or video load failed:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Video Element */}
      {!videoError && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover object-[68%_center] sm:object-center transition-opacity duration-700 opacity-100"
          aria-hidden="true"
        />
      )}

      {/* Fallback Image if video fails */}
      {videoError && (
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[68%_center] sm:object-center"
          aria-hidden="true"
        />
      )}

      {/* Dark Navy Overlays - Reduced for a lighter, cleaner cinematic look */}
      {/* 1. Left-to-right gradient overlay matching brand identity (#021861) */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(2, 24, 97, 0.78) 0%, rgba(2, 24, 97, 0.58) 36%, rgba(2, 24, 97, 0.28) 65%, rgba(2, 24, 97, 0.05) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Mobile-optimized overlay ensuring mobile readability while showcasing character */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(2, 24, 97, 0.72) 0%, rgba(2, 24, 97, 0.52) 45%, rgba(2, 24, 97, 0.78) 100%)',
        }}
        aria-hidden="true"
      />

      {/* 2. Top and bottom subtle gradient passes for navigation and trust indicator legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(2, 24, 97, 0.30) 0%, rgba(2, 24, 97, 0) 25%, rgba(2, 24, 97, 0) 70%, rgba(2, 24, 97, 0.35) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
};

