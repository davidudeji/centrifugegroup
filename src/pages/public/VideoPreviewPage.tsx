import React from 'react';
import { SEO } from '../../components/ui/SEO';
import { VideoPreviewShowcase } from '../../components/media/VideoPreviewShowcase';
import { VideoPreviewOverlay } from '../../components/media/VideoPreviewOverlay';
import { Film, Code, Sparkles, CheckCircle2, Monitor } from 'lucide-react';

export const VideoPreviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071521] text-white">
      <SEO
        title="Video Preview Overlay Engine | Centrifuge Group"
        description="Responsive video preview overlay system mapping continuous FFmpeg video loops over layout baselines."
      />

      {/* Hero Header */}
      <section className="py-16 border-b border-[#172333] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#16C7D9]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#16C7D9]/15 border border-[#16C7D9]/30 text-xs font-mono text-[#67E8F9]">
            <Film className="h-3.5 w-3.5" />
            <span>RESPONSIVE VIDEO OVERLAY SPECIFICATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Continuous Video Overlays for{' '}
            <span className="text-[#16C7D9]">Layout Baselines</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Directly mapping lightweight, looping WebM animations over baseline layout mockups
            using relative percentage coordinates. Zero layout shift, 100% fluid responsiveness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-[#64748B]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#16C7D9]" />
              <span>FFmpeg VP9 WebM Encoded</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#16C7D9]" />
              <span>Relative Percentage Positioning</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#16C7D9]" />
              <span>Zero Aspect-Ratio Distortion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Section */}
      <section className="py-12">
        <VideoPreviewShowcase />
      </section>

      {/* Technical Integration & Usage Reference */}
      <section className="py-12 border-t border-[#172333] bg-[#0B1F33]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#16C7D9]">
              <Code className="h-4 w-4" />
              <span>INTEGRATION CODE SNIPPET</span>
            </div>
            <h2 className="text-2xl font-bold font-heading text-white">
              How to Implement in Any Parent Component
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Import <code className="text-[#16C7D9]">VideoPreviewOverlay</code> and pass the baseline image URL,
              the optimized video path, and the mapped dimensions.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#071521] border border-[#172333] overflow-x-auto text-xs font-mono leading-relaxed text-[#CBD5E1]">
            <pre>
{`import { VideoPreviewOverlay } from '@/components/media/VideoPreviewOverlay';

export const MyFeatureSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Example 1: Optimax Live Ledger Mapping */}
      <VideoPreviewOverlay
        backgroundImage="/previews/optimax-dashboard-preview.png"
        videoSource="/previews/optimax-ledger-stream.webm"
        dimensions={{
          top: '31.5%',
          left: '40.2%',
          width: '56.8%',
          height: '42.5%',
        }}
        altText="Optimax Real-Time Accounting Ledger"
      />
    </div>
  );
};`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPreviewPage;
