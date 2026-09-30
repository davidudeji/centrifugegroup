import React, { useState } from 'react';
import { VideoPreviewOverlay, VideoDimensions } from './VideoPreviewOverlay';
import { Check, Copy, Sliders, Eye, EyeOff, Layers, Terminal } from 'lucide-react';

interface PreviewPreset {
  id: string;
  name: string;
  subtitle: string;
  backgroundImage: string;
  videoSource: string;
  dimensions: VideoDimensions;
  sectionDescription: string;
  aspectRatioInfo: string;
  ffmpegCommand: string;
}

const PRESETS: PreviewPreset[] = [
  {
    id: 'optimax-ledger',
    name: 'Optimax ERP Ledger & Reconciliation',
    subtitle: 'Dark Enterprise Workspace (Image 1)',
    backgroundImage: '/previews/optimax-dashboard-preview.png',
    videoSource: '/previews/optimax-ledger-stream.webm',
    dimensions: {
      top: '31.5%',
      left: '40.2%',
      width: '56.8%',
      height: '42.5%',
    },
    sectionDescription: 'Operational Ledger & Automated Double-Entry Reconciliation Table',
    aspectRatioInfo: 'Baseline: 1024 × 424 px (Aspect Ratio 2.41:1)',
    ffmpegCommand:
      'ffmpeg -i source_ledger.mp4 -an -vcodec libvpx-vp9 -crf 28 -vf "scale=iw*min(1\\,720/ih):ih*min(1\\,720/ih)" -loop 0 optimax-ledger-stream.webm',
  },
  {
    id: 'service-mesh',
    name: 'Multi-Cluster Service Mesh Telemetry',
    subtitle: 'System Health Dashboard (Image 2)',
    backgroundImage: '/previews/hero-system-preview.png',
    videoSource: '/previews/service-mesh-telemetry.webm',
    dimensions: {
      top: '34.8%',
      left: '5.6%',
      width: '88.8%',
      height: '29.2%',
    },
    sectionDescription: 'Live Health Telemetry, Fleet Pings & Financial Ledger Status',
    aspectRatioInfo: 'Baseline: 604 × 603 px (Aspect Ratio 1:1)',
    ffmpegCommand:
      'ffmpeg -i source_mesh.mp4 -an -vcodec libvpx-vp9 -crf 28 -vf "scale=iw*min(1\\,720/ih):ih*min(1\\,720/ih)" -loop 0 service-mesh-telemetry.webm',
  },
];

/**
 * Parent component example demonstrating how to pass precise percentage coordinates
 * to map continuous FFmpeg video loops over layout baseline images.
 */
export const VideoPreviewShowcase: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [overlayActive, setOverlayActive] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const currentPreset = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(currentPreset.ffmpegCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-[#0B1F33] border border-[#1E3A5F] text-white">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16C7D9]/20 text-[#67E8F9] text-xs font-mono font-bold mb-2">
            <Layers className="h-3.5 w-3.5" />
            <span>FFMPEG VIDEO OVERLAY ENGINE</span>
          </div>
          <h3 className="text-lg font-bold font-heading text-white">
            {currentPreset.name}
          </h3>
          <p className="text-xs text-[#94A3B8] mt-0.5">
            {currentPreset.sectionDescription}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Preset Switcher */}
          <div className="flex p-1 rounded-lg bg-[#071521] border border-[#172333]">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setSelectedPresetId(preset.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[6px] transition-colors ${
                  selectedPresetId === preset.id
                    ? 'bg-[#16C7D9] text-[#071521] shadow-xs'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {preset.subtitle.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Toggle Overlay Button */}
          <button
            onClick={() => setOverlayActive(!overlayActive)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
              overlayActive
                ? 'bg-[#10B981]/20 text-[#34D399] border-[#10B981]/40'
                : 'bg-white/5 text-[#94A3B8] border-[#1E3A5F] hover:text-white'
            }`}
            title="Toggle video overlay visibility to compare with baseline image"
          >
            {overlayActive ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            <span>{overlayActive ? 'Overlay: ON' : 'Overlay: OFF'}</span>
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="relative p-4 sm:p-6 rounded-2xl bg-[#071521] border border-[#172333] shadow-2xl">
        {overlayActive ? (
          <VideoPreviewOverlay
            backgroundImage={currentPreset.backgroundImage}
            videoSource={currentPreset.videoSource}
            dimensions={currentPreset.dimensions}
            altText={currentPreset.name}
          />
        ) : (
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-[#172333]">
            <img
              src={currentPreset.backgroundImage}
              alt={currentPreset.name}
              className="w-full h-auto block"
            />
          </div>
        )}
      </div>

      {/* Metadata & Coordinate Inspection Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Percentage Coordinates Card */}
        <div className="md:col-span-6 p-4 rounded-xl bg-[#0B1F33] border border-[#1E3A5F] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono">
            <span className="flex items-center gap-1.5 font-bold text-white uppercase tracking-wider">
              <Sliders className="h-3.5 w-3.5 text-[#16C7D9]" />
              Mapped Percentage Coordinates
            </span>
            <span className="text-[#16C7D9]">{currentPreset.aspectRatioInfo}</span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2.5 rounded-lg bg-[#071521] border border-[#172333]">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">Top</span>
              <span className="text-sm font-mono font-bold text-white mt-1 block">
                {currentPreset.dimensions.top}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071521] border border-[#172333]">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">Left</span>
              <span className="text-sm font-mono font-bold text-white mt-1 block">
                {currentPreset.dimensions.left}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071521] border border-[#172333]">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">Width</span>
              <span className="text-sm font-mono font-bold text-[#16C7D9] mt-1 block">
                {currentPreset.dimensions.width}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071521] border border-[#172333]">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">Height</span>
              <span className="text-sm font-mono font-bold text-[#16C7D9] mt-1 block">
                {currentPreset.dimensions.height}
              </span>
            </div>
          </div>
        </div>

        {/* FFmpeg Command Snippet */}
        <div className="md:col-span-6 p-4 rounded-xl bg-[#0B1F33] border border-[#1E3A5F] space-y-3">
          <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono">
            <span className="flex items-center gap-1.5 font-bold text-white uppercase tracking-wider">
              <Terminal className="h-3.5 w-3.5 text-[#10B981]" />
              FFmpeg Optimization Command
            </span>
            <button
              onClick={handleCopyCommand}
              className="flex items-center gap-1 text-[11px] text-[#16C7D9] hover:text-[#67E8F9] transition-colors"
            >
              {copied ? <Check className="h-3 w-3 text-[#10B981]" /> : <Copy className="h-3 w-3" />}
              <span>{copied ? 'Copied' : 'Copy Command'}</span>
            </button>
          </div>

          <div className="p-2.5 rounded-lg bg-[#071521] border border-[#172333] font-mono text-[11px] text-[#A5F3FC] overflow-x-auto select-all leading-relaxed">
            {currentPreset.ffmpegCommand}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewShowcase;
