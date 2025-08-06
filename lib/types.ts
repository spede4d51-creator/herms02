// Type definitions for HERMS project management system

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'manager' | 'member'
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'on-hold' | 'cancelled'
  priority: 'low' | 'medium' | 'high'
  progress: number
  startDate: string
  dueDate: string
  createdAt: string
  updatedAt: string
  ownerId: string
  owner: User
  members: User[]
  tasks: Task[]
}

export interface Task {
  id: string
  title: string
  description?: string
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  createdAt: string
  updatedAt: string
  projectId: string
  project: Project
  assigneeId?: string
  assignee?: User
  createdById: string
  createdBy: User
}

export interface CreateProjectData {
  name: string
  description: string
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  memberIds?: string[]
}

export interface CreateTaskData {
  title: string
  description?: string
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  projectId: string
  assigneeId?: string
}

export interface UpdateProjectData extends Partial<CreateProjectData> {
  status?: 'active' | 'completed' | 'on-hold' | 'cancelled'
  progress?: number
}

export interface UpdateTaskData extends Partial<CreateTaskData> {
  status?: 'pending' | 'in-progress' | 'completed' | 'cancelled'
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
