import type { Project } from '../types'
import { mockProjects } from '../data/mockData'

const STORAGE_KEY = 'centrifuge_projects_data'

function getInitialProjects(): Project[] {
  if (typeof window === 'undefined') return mockProjects
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (err) {
    console.error('Error reading projects from storage:', err)
  }
  return mockProjects
}

function saveProjects(projects: Project[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  } catch (err) {
    console.error('Error saving projects to storage:', err)
  }
}

export const projectService = {
  async getProjects(filter?: {
    category?: string
    industry?: string
    status?: string
    featured?: boolean
    search?: string
  }): Promise<Project[]> {
    await new Promise((resolve) => setTimeout(resolve, 120))
    let projects = getInitialProjects()

    if (filter?.category) {
      projects = projects.filter((p) => p.category === filter.category)
    }
    if (filter?.industry) {
      projects = projects.filter((p) => p.industry === filter.industry)
    }
    if (filter?.status) {
      projects = projects.filter((p) => p.status === filter.status)
    }
    if (filter?.featured !== undefined) {
      projects = projects.filter((p) => p.featured === filter.featured)
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase()
      projects = projects.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      )
    }
    return projects
  },

  async getProjectBySlug(slug: string): Promise<Project | null> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const projects = getInitialProjects()
    return projects.find((p) => p.slug === slug) || null
  },

  async createProject(data: Omit<Project, 'id'>): Promise<Project> {
    await new Promise((resolve) => setTimeout(resolve, 250))
    const projects = getInitialProjects()
    const newProject: Project = {
      ...data,
      id: `proj-${Date.now()}`,
    }
    const updated = [newProject, ...projects]
    saveProjects(updated)
    return newProject
  },

  async updateProject(id: string, data: Partial<Project>): Promise<Project> {
    await new Promise((resolve) => setTimeout(resolve, 250))
    const projects = getInitialProjects()
    const index = projects.findIndex((p) => p.id === id)
    if (index === -1) {
      throw new Error(`Project with ID ${id} not found`)
    }
    const updated = {
      ...projects[index],
      ...data,
    }
    projects[index] = updated
    saveProjects(projects)
    return updated
  },

  async deleteProject(id: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const projects = getInitialProjects()
    const filtered = projects.filter((p) => p.id !== id)
    saveProjects(filtered)
    return true
  }
}
