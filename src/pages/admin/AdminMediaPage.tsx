import React, { useState, useRef } from 'react'
import {
  Upload,
  Search,
  Grid,
  List,
  Trash2,
  Copy,
  Image as ImageIcon,
  FileVideo,
  File,
  CheckCircle2,
  Plus,
} from 'lucide-react'

interface MediaAsset {
  id: string
  name: string
  url: string
  type: 'image' | 'video' | 'document'
  size: string
  dimensions?: string
  uploadedAt: string
}

// Demo media assets
const demoMedia: MediaAsset[] = [
  {
    id: 'm-1', name: 'optimax-dashboard.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    size: '248 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-20T10:00:00Z'
  },
  {
    id: 'm-2', name: 'logistics-platform.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    size: '312 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-18T14:00:00Z'
  },
  {
    id: 'm-3', name: 'healthcare-system.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    size: '189 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-15T08:00:00Z'
  },
  {
    id: 'm-4', name: 'titan-inverter.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1558441719-8b4bee5e998a?auto=format&fit=crop&w=600&q=80',
    size: '267 KB', dimensions: '800 × 800', uploadedAt: '2024-03-10T09:00:00Z'
  },
  {
    id: 'm-5', name: 'solar-controller.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    size: '198 KB', dimensions: '800 × 800', uploadedAt: '2024-03-08T11:00:00Z'
  },
  {
    id: 'm-6', name: 'gis-mapping.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
    size: '341 KB', dimensions: '1200 × 900', uploadedAt: '2024-03-05T15:00:00Z'
  },
  {
    id: 'm-7', name: 'iot-monitoring.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    size: '276 KB', dimensions: '1200 × 800', uploadedAt: '2024-03-01T10:00:00Z'
  },
  {
    id: 'm-8', name: 'hospital-management.jpg', type: 'image',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    size: '223 KB', dimensions: '1200 × 800', uploadedAt: '2024-02-28T13:00:00Z'
  },
]

export const AdminMediaPage: React.FC = () => {
  const [media, setMedia] = useState<MediaAsset[]>(demoMedia)
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selected, setSelected] = useState<string[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filtered = media.filter((m) =>
    !search || m.name.toLowerCase().includes(search.toLowerCase())
  )

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  const handleDelete = (ids: string[]) => {
    setMedia((prev) => prev.filter((m) => !ids.includes(m.id)))
    setSelected([])
  }

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  const TypeIcon = ({ type }: { type: MediaAsset['type'] }) => {
    if (type === 'image') return <ImageIcon className="h-4 w-4 text-[#16C7D9]" />
    if (type === 'video') return <FileVideo className="h-4 w-4 text-[#D97706]" />
    return <File className="h-4 w-4 text-[#64748B]" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#0B1F33]">Media Library</h1>
          <p className="text-sm text-[#64748B] mt-0.5">{media.length} assets</p>
        </div>
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <button
              onClick={() => handleDelete(selected)}
              className="inline-flex items-center gap-2 px-3 py-2 bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20 rounded-lg text-xs font-semibold hover:bg-[#DC2626]/20 transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete ({selected.length})
            </button>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors"
          >
            <Plus className="h-4 w-4" />
            Upload
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*,.pdf"
            className="hidden"
            onChange={() => { /* In production: upload to storage */ }}
          />
        </div>
      </div>

      {/* Upload drop zone */}
      <div
        className="border-2 border-dashed border-[#E2E8F0] rounded-xl p-8 text-center hover:border-[#16C7D9] transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
      >
        <Upload className="h-8 w-8 text-[#94A3B8] mx-auto mb-3" />
        <p className="text-sm font-semibold text-[#172333]">Drop files here or click to upload</p>
        <p className="text-xs text-[#94A3B8] mt-1">Images, videos and documents supported</p>
      </div>

      {/* Filters & view toggle */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
          <input
            type="text"
            placeholder="Search files…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-4 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C7D9]"
          />
        </div>
        <div className="flex items-center gap-1 border border-[#E2E8F0] rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-[#0B1F33] text-white' : 'text-[#64748B] hover:bg-[#F7F9FA]'}`}
          >
            <Grid className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-[#0B1F33] text-white' : 'text-[#64748B] hover:bg-[#F7F9FA]'}`}
          >
            <List className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Media grid / list */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((asset) => {
            const isSelected = selected.includes(asset.id)
            const isCopied = copiedId === asset.id
            return (
              <div
                key={asset.id}
                className={`group relative bg-white rounded-xl border overflow-hidden transition-all cursor-pointer ${
                  isSelected ? 'border-[#16C7D9] ring-2 ring-[#16C7D9]/30' : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
                onClick={() => toggleSelect(asset.id)}
              >
                {/* Thumbnail */}
                <div className="aspect-square bg-[#F7F9FA] overflow-hidden">
                  {asset.type === 'image' ? (
                    <img src={asset.url} alt={asset.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <TypeIcon type={asset.type} />
                    </div>
                  )}
                </div>

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-[#0B1F33]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleCopyUrl(asset.url, asset.id) }}
                    className="p-2 rounded-lg bg-white/90 text-[#0B1F33] hover:bg-white transition-colors"
                    title="Copy URL"
                  >
                    {isCopied ? <CheckCircle2 className="h-4 w-4 text-[#16A34A]" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete([asset.id]) }}
                    className="p-2 rounded-lg bg-white/90 text-[#DC2626] hover:bg-white transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Checkbox */}
                {isSelected && (
                  <div className="absolute top-2 left-2 h-5 w-5 rounded-full bg-[#16C7D9] flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  </div>
                )}

                {/* File info */}
                <div className="p-2">
                  <p className="text-[10px] font-semibold text-[#172333] truncate">{asset.name}</p>
                  <p className="text-[10px] text-[#94A3B8]">{asset.size}</p>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F7F9FA] border-b border-[#E2E8F0]">
                <tr>
                  <th className="w-8 px-4 py-3" />
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">File</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Type</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Size</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Dimensions</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Uploaded</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-[#64748B] uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {filtered.map((asset) => (
                  <tr key={asset.id} className="hover:bg-[#F7F9FA] transition-colors">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(asset.id)}
                        onChange={() => toggleSelect(asset.id)}
                        className="h-4 w-4 rounded border-[#E2E8F0]"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {asset.type === 'image' && (
                          <img src={asset.url} alt={asset.name} className="h-10 w-10 rounded-lg object-cover border border-[#E2E8F0] shrink-0" />
                        )}
                        <span className="text-xs font-semibold text-[#172333]">{asset.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3"><TypeIcon type={asset.type} /></td>
                    <td className="px-4 py-3 text-xs text-[#64748B]">{asset.size}</td>
                    <td className="px-4 py-3 text-xs text-[#64748B]">{asset.dimensions ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-[#64748B]">{formatDate(asset.uploadedAt)}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleCopyUrl(asset.url, asset.id)}
                          className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0B1F33]"
                          title="Copy URL"
                        >
                          {copiedId === asset.id ? <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                        <button
                          onClick={() => handleDelete([asset.id])}
                          className="p-1.5 rounded hover:bg-[#DC2626]/10 text-[#94A3B8] hover:text-[#DC2626]"
                          title="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminMediaPage
