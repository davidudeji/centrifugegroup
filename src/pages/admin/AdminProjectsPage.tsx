import React, { useState } from 'react'
import { mockProjects } from '../../data/mockData'
import type { Project } from '../../types'
import {
  Plus, Edit2, Trash2, Star, ExternalLink, Search, Eye, EyeOff,
  Globe, Github, BookOpen, Play,
} from 'lucide-react'

const statusColors: Record<Project['status'], string> = {
  live:        'bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/20',
  development: 'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20',
  archived:    'bg-[#94A3B8]/10 text-[#94A3B8] border-[#94A3B8]/20',
}

export const AdminProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)

  const emptyProject: Omit<Project, 'id'> = {
    slug: '',
    name: '',
    category: '',
    industry: '',
    description: '',
    image: '',
    technologies: [],
    status: 'development',
    featured: false,
    displayOrder: projects.length + 1,
  }

  const [form, setForm] = useState<Omit<Project, 'id'>>(emptyProject)
  const [techInput, setTechInput] = useState('')

  const filtered = projects.filter((p) =>
    !search ||
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()) ||
    p.industry.toLowerCase().includes(search.toLowerCase())
  )

  const handleEdit = (p: Project) => {
    setEditId(p.id)
    setForm({ ...p })
    setTechInput('')
    setShowForm(true)
  }

  const handleSave = () => {
    if (!form.name.trim()) return
    if (editId) {
      setProjects((prev) => prev.map((p) => p.id === editId ? { ...p, ...form } : p))
    } else {
      const newProject: Project = {
        ...form,
        id: `proj-${Date.now()}`,
      }
      setProjects((prev) => [newProject, ...prev])
    }
    setShowForm(false)
    setEditId(null)
    setForm(emptyProject)
  }

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  const toggleFeatured = (id: string) => {
    setProjects((prev) => prev.map((p) => p.id === id ? { ...p, featured: !p.featured } : p))
  }

  const addTech = () => {
    const t = techInput.trim()
    if (!t) return
    setForm((f) => ({ ...f, technologies: [...(f.technologies || []), t] }))
    setTechInput('')
  }

  const removeTech = (tech: string) => {
    setForm((f) => ({ ...f, technologies: (f.technologies || []).filter((t) => t !== tech) }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-[#0B1F33]">Projects Showcase</h1>
          <p className="text-sm text-[#64748B] mt-0.5">{projects.length} projects</p>
        </div>
        <button
          onClick={() => { setShowForm(true); setEditId(null); setForm(emptyProject); setTechInput('') }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 space-y-5">
          <h2 className="font-heading font-bold text-base text-[#0B1F33]">
            {editId ? 'Edit Project' : 'Add New Project'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Project Name *', key: 'name', type: 'text', placeholder: 'e.g. Optimax Enterprise ERP' },
              { label: 'Slug *', key: 'slug', type: 'text', placeholder: 'e.g. optimax-enterprise-erp' },
              { label: 'Category *', key: 'category', type: 'text', placeholder: 'e.g. Enterprise ERP' },
              { label: 'Industry *', key: 'industry', type: 'text', placeholder: 'e.g. Commerce & Operations' },
              { label: 'Image URL', key: 'image', type: 'url', placeholder: 'https://…' },
              { label: 'Live URL', key: 'liveUrl', type: 'url', placeholder: 'https://…' },
              { label: 'Demo URL', key: 'demoUrl', type: 'url', placeholder: 'https://…' },
              { label: 'GitHub URL', key: 'githubUrl', type: 'url', placeholder: 'https://github.com/…' },
              { label: 'Documentation URL', key: 'documentationUrl', type: 'url', placeholder: 'https://…' },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key}>
                <label className="block text-xs font-semibold text-[#172333] mb-1.5">{label}</label>
                <input
                  type={type}
                  value={(form as Record<string, unknown>)[key] as string ?? ''}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  placeholder={placeholder}
                  className="w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
                />
              </div>
            ))}

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Description *</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9] resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as Project['status'] }))}
                className="w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
              >
                <option value="live">Live</option>
                <option value="development">Development</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Display Order</label>
              <input
                type="number"
                min={1}
                value={form.displayOrder ?? ''}
                onChange={(e) => setForm((f) => ({ ...f, displayOrder: Number(e.target.value) }))}
                className="w-full h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
              />
            </div>

            {/* Technologies */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#172333] mb-1.5">Technologies</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                  placeholder="Add a technology and press Enter"
                  className="flex-1 h-9 px-3 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] focus:outline-none focus:border-[#16C7D9]"
                />
                <button onClick={addTech} className="px-3 py-2 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#64748B] hover:bg-[#E2E8F0]">
                  Add
                </button>
              </div>
              {(form.technologies ?? []).length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {(form.technologies ?? []).map((tech) => (
                    <span key={tech} className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0B1F33]/10 text-[#0B1F33] rounded-full text-xs font-semibold">
                      {tech}
                      <button onClick={() => removeTech(tech)} className="text-[#64748B] hover:text-[#DC2626]">×</button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="sm:col-span-2 flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
                  className="h-4 w-4 rounded border-[#E2E8F0]"
                />
                <span className="text-xs font-semibold text-[#172333]">Featured project</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-2 border-t border-[#E2E8F0]">
            <button onClick={handleSave} className="px-5 py-2 bg-[#0B1F33] text-white rounded-lg text-xs font-bold hover:bg-[#071521] transition-colors">
              {editId ? 'Save Changes' : 'Create Project'}
            </button>
            <button onClick={() => { setShowForm(false); setEditId(null) }} className="px-5 py-2 border border-[#E2E8F0] rounded-lg text-xs font-semibold text-[#64748B] hover:bg-[#F7F9FA] transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
          <input
            type="text"
            placeholder="Search projects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-4 bg-[#F7F9FA] border border-[#E2E8F0] rounded-lg text-sm text-[#172333] placeholder-[#94A3B8] focus:outline-none focus:border-[#16C7D9]"
          />
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_4px_16px_rgba(11,31,51,0.08)] transition-shadow">
            {/* Image */}
            <div className="aspect-video bg-[#F7F9FA] overflow-hidden relative">
              {project.image ? (
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#94A3B8] text-xs">No image</div>
              )}
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-[#D97706] text-white rounded-full text-[10px] font-bold">
                  <Star className="h-2.5 w-2.5" />
                  Featured
                </div>
              )}
              <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold border ${statusColors[project.status]}`}>
                {project.status}
              </div>
            </div>

            <div className="p-4 space-y-3">
              {/* Meta */}
              <div>
                <p className="text-[10px] font-mono font-bold text-[#16C7D9] uppercase tracking-wider">{project.category}</p>
                <h3 className="font-heading font-bold text-sm text-[#0B1F33] mt-0.5 leading-tight">{project.name}</h3>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">{project.description}</p>
              </div>

              {/* Tech tags */}
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-[#F7F9FA] border border-[#E2E8F0] rounded text-[10px] font-semibold text-[#64748B]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-[#F7F9FA] border border-[#E2E8F0] rounded text-[10px] text-[#94A3B8]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* Links */}
              <div className="flex items-center gap-2 flex-wrap">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-[#16C7D9] font-semibold hover:underline">
                    <Globe className="h-3 w-3" />Live
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-[#64748B] font-semibold hover:underline">
                    <Play className="h-3 w-3" />Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-[#64748B] font-semibold hover:underline">
                    <Github className="h-3 w-3" />GitHub
                  </a>
                )}
                {project.documentationUrl && (
                  <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-[#64748B] font-semibold hover:underline">
                    <BookOpen className="h-3 w-3" />Docs
                  </a>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#F1F5F9]">
                <button
                  onClick={() => toggleFeatured(project.id)}
                  className={`p-1.5 rounded-lg transition-colors ${project.featured ? 'bg-[#D97706]/10 text-[#D97706]' : 'text-[#94A3B8] hover:bg-[#F1F5F9]'}`}
                  title={project.featured ? 'Unfeature' : 'Feature'}
                >
                  <Star className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleEdit(project)}
                  className="p-1.5 rounded-lg text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0B1F33] transition-colors"
                  title="Edit"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-1.5 rounded-lg text-[#94A3B8] hover:bg-[#DC2626]/10 hover:text-[#DC2626] transition-colors"
                  title="Delete"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
                <a
                  href={`/projects/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto p-1.5 rounded-lg text-[#94A3B8] hover:bg-[#F1F5F9] hover:text-[#0B1F33] transition-colors"
                  title="View public page"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminProjectsPage
