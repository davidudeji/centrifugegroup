import React, { useRef, useEffect, useState } from 'react';

export interface VideoDimensions {
  top: string;
  left: string;
  width: string;
  height: string;
}

export interface VideoPreviewOverlayProps {
  /** The path or URL of the user-provided layout image */
  backgroundImage: string;
  /** The path or URL to the FFmpeg-optimized .webm (or .mp4) video */
  videoSource: string;
  /** Relative percentage coordinates where the video overlays the layout section */
  dimensions: VideoDimensions;
  /** Accessible image description */
  altText?: string;
  /** Optional container wrapper classes */
  className?: string;
  /** Optional overlay section classes */
  overlayClassName?: string;
  /** Optional video element classes */
  videoClassName?: string;
  /** Optional poster frame */
  poster?: string;
  /** Optional callback fired when video is playing */
  onVideoReady?: () => void;
}

/**
 * VideoPreviewOverlay
 *
 * Renders an optimized, looping video directly over a specific section
 * of a layout baseline image using relative percentage positioning.
 * Guarantees zero layout shift and fluid scaling across viewports.
 */
export const VideoPreviewOverlay: React.FC<VideoPreviewOverlayProps> = ({
  backgroundImage,
  videoSource,
  dimensions,
  altText = 'Layout baseline preview',
  className = '',
  overlayClassName = '',
  videoClassName = '',
  poster,
  onVideoReady,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly guarantee muted playback to satisfy browser autoplay policies
    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoLoaded(true);
          onVideoReady?.();
        })
        .catch(() => {
          // Retry playback on user interaction if browser suspended it
          const retryPlay = () => {
            video.play().then(() => {
              setIsVideoLoaded(true);
              onVideoReady?.();
            }).catch(() => {});
            window.removeEventListener('click', retryPlay);
            window.removeEventListener('touchstart', retryPlay);
          };
          window.addEventListener('click', retryPlay, { once: true });
          window.addEventListener('touchstart', retryPlay, { once: true });
        });
    }
  }, [videoSource, onVideoReady]);

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl bg-[#071521] border border-[#172333] transition-all select-none ${className}`}
    >
      {/* Base Layer: User-provided layout/wireframe image */}
      <img
        src={backgroundImage}
        alt={altText}
        className="w-full h-auto block select-none pointer-events-none"
        loading="eager"
        decoding="async"
      />

      {/* Overlay Layer: Precisely mapped looping FFmpeg video container */}
      <div
        className={`absolute overflow-hidden bg-black/40 transition-opacity duration-300 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-90'
        } ${overlayClassName}`}
        style={{
          top: dimensions.top,
          left: dimensions.left,
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          poster={poster}
          preload="auto"
          aria-hidden="true"
          className={`w-full h-full object-cover block pointer-events-none ${videoClassName}`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={videoSource} type="video/webm" />
          {videoSource.endsWith('.mp4') && <source src={videoSource} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPreviewOverlay;
