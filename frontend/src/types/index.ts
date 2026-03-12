export enum AgentStatus {
  IDLE = 'idle',
  BUSY = 'busy',
  OFFLINE = 'offline',
  ERROR = 'error',
}

export enum AgentType {
  LLM = 'llm',
  TOOL = 'tool',
  HUMAN = 'human',
  CUSTOM = 'custom',
}

export enum TaskStatus {
  PENDING = 'pending',
  QUEUED = 'queued',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

export enum TaskPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent',
}

export interface Agent {
  id: string
  name: string
  type: AgentType
  status: AgentStatus
  config?: Record<string, any>
  capabilities?: string[]
  metadata?: Record<string, any>
  created_at: string
  updated_at?: string
  last_active_at?: string
  tasks_completed: number
  tasks_failed: number
}

export interface Task {
  id: string
  title: string
  description?: string
  agent_id?: string
  status: TaskStatus
  priority: TaskPriority
  input_data?: Record<string, any>
  output_data?: Record<string, any>
  error_message?: string
  retry_count: number
  max_retries: number
  depends_on?: string[]
  metadata?: Record<string, any>
  created_at: string
  updated_at?: string
  started_at?: string
  completed_at?: string
}

export interface OrchestratorStats {
  total_agents: number
  active_agents: number
  idle_agents: number
  total_tasks: number
  pending_tasks: number
  running_tasks: number
  completed_tasks: number
  failed_tasks: number
}

export interface SystemStatus {
  status: string
  uptime: number
  redis_connected: boolean
  database_connected: boolean
  stats: OrchestratorStats
}
