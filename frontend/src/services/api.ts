import axios from 'axios'
import type { Agent, Task, SystemStatus } from '../types'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Agents API
export const agentsApi = {
  list: () => api.get<Agent[]>('/agents'),
  get: (id: string) => api.get<Agent>(`/agents/${id}`),
  create: (data: Partial<Agent>) => api.post<Agent>('/agents', data),
  update: (id: string, data: Partial<Agent>) => api.patch<Agent>(`/agents/${id}`, data),
  delete: (id: string) => api.delete(`/agents/${id}`),
}

// Tasks API
export const tasksApi = {
  list: (params?: { status?: string; agent_id?: string }) =>
    api.get<Task[]>('/tasks', { params }),
  get: (id: string) => api.get<Task>(`/tasks/${id}`),
  create: (data: Partial<Task>) => api.post<Task>('/tasks', data),
  update: (id: string, data: Partial<Task>) => api.patch<Task>(`/tasks/${id}`, data),
  delete: (id: string) => api.delete(`/tasks/${id}`),
  cancel: (id: string) => api.post<Task>(`/tasks/${id}/cancel`),
}

// Orchestrator API
export const orchestratorApi = {
  getStatus: () => api.get<SystemStatus>('/orchestrator/status'),
  start: () => api.post('/orchestrator/start'),
  stop: () => api.post('/orchestrator/stop'),
  pause: () => api.post('/orchestrator/pause'),
  resume: () => api.post('/orchestrator/resume'),
}

export default api
