# AI SYSTEM PROMPT & TECHNICAL SPECIFICATION

## Objective
Create a React component that takes a user-provided image (acting as a placement layout/wireframe), detects a specific section within that image, and renders a continuous, optimized video loop directly over that section using FFmpeg-processed assets.

## Technical Stack
- Frontend: React (TypeScript preferred)
- Styling: Tailwind CSS (or standard CSS absolute positioning)
- Video Optimization: Pre-processed via FFmpeg

---

## 1. Asset Preparation & Optimization (FFmpeg Layer)
Assume the source video asset is pre-optimized using FFmpeg to ensure instant loading and zero layout shift. 

FFmpeg Command to execute on the source video:
```bash
ffmpeg -i source_video.mp4 -an -vcodec libvpx-vp9 -crf 28 -vf "scale=iw*min(1\,720/ih):ih*min(1\,720/ih)" -loop 0 web_preview.webm
```
- "-an": Strips audio data entirely to minimize file payload.
- "-vcodec libvpx-vp9 -crf 28": Compresses the video into a modern, highly compressed WebM format.
- "-vf scale...": Caps resolution height at 720p maximum to ensure lightning-fast website streaming.

---

## 2. Core React Component Specifications
Write a React component named `VideoPreviewOverlay` that satisfies the following criteria:

### Component Props
1. `backgroundImage` (string): The path/URL of the user-provided layout image.
2. `videoSource` (string): The path/URL to the FFmpeg-optimized .webm file.
3. `dimensions` (object): An object containing relative percentage coordinates where the video should overlay the image section:
   - `top` (string, e.g., '15.5%')
   - `left` (string, e.g., '10.2%')
   - `width` (string, e.g., '45.0%')
   - `height` (string, e.g., '30.0%')

### HTML5 Video Configuration
The embedded video element must strictly include these attributes to guarantee smooth, unblocked background streaming across all desktop and mobile web browsers:
- autoplay
- muted
- loop
- playsinline
- controls={false}

---

## 3. Reference Implementation Code Structure

Please generate code matching this structural logic:

```tsx
import React from 'react';

interface VideoDimensions {
  top: string;
  left: string;
  width: string;
  height: string;
}

interface VideoPreviewOverlayProps {
  backgroundImage: string;
  videoSource: string;
  dimensions: VideoDimensions;
}

export const VideoPreviewOverlay: React.FC<VideoPreviewOverlayProps> = ({
  backgroundImage,
  videoSource,
  dimensions
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md">
      {/* Base Layer: User's provided layout image */}
      <img 
        src={backgroundImage} 
        alt="Website layout baseline" 
        className="w-full h-auto block" 
      />

      {/* Overlay Layer: The looping FFmpeg video container */}
      <div 
        className="absolute overflow-hidden bg-black"
        style={{
          top: dimensions.top,
          left: dimensions.left,
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
```

## 4. Expected Deliverables
1. Provide the complete code for the `VideoPreviewOverlay` component.
2. Provide a parent component example showing how to pass precise percentage coordinates to map the video over the layout section perfectly.
3. Ensure the CSS scales cleanly on browser resize without destroying aspect ratios.
