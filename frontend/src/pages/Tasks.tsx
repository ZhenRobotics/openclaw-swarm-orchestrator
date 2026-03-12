import { useQuery } from '@tanstack/react-query'
import { Plus, RefreshCw, Filter } from 'lucide-react'
import { tasksApi } from '../services/api'
import { TaskStatus, TaskPriority } from '../types'
import { formatDistanceToNow } from 'date-fns'

const statusColors = {
  [TaskStatus.PENDING]: 'bg-gray-100 text-gray-800',
  [TaskStatus.QUEUED]: 'bg-yellow-100 text-yellow-800',
  [TaskStatus.RUNNING]: 'bg-blue-100 text-blue-800',
  [TaskStatus.COMPLETED]: 'bg-green-100 text-green-800',
  [TaskStatus.FAILED]: 'bg-red-100 text-red-800',
  [TaskStatus.CANCELLED]: 'bg-gray-100 text-gray-800',
}

const priorityColors = {
  [TaskPriority.LOW]: 'text-gray-500',
  [TaskPriority.NORMAL]: 'text-blue-500',
  [TaskPriority.HIGH]: 'text-orange-500',
  [TaskPriority.URGENT]: 'text-red-500',
}

export default function Tasks() {
  const { data: tasks, isLoading, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => tasksApi.list().then((res) => res.data),
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading tasks...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="sm:flex sm:items-center mb-6">
        <div className="sm:flex-auto">
          <h2 className="text-2xl font-bold text-gray-900">Tasks</h2>
          <p className="mt-2 text-sm text-gray-700">
            View and manage all tasks in the system
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button
            onClick={() => refetch()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md shadow-sm text-sm font-medium hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            New Task
          </button>
        </div>
      </div>

      {tasks && tasks.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No tasks</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new task.</p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md shadow-sm text-sm font-medium hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {tasks?.map((task) => (
              <li key={task.id}>
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3">
                        <span className={`h-2 w-2 rounded-full ${priorityColors[task.priority]}`} />
                        <div>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {task.title}
                          </p>
                          <p className="text-sm text-gray-500">{task.id}</p>
                        </div>
                      </div>
                      {task.description && (
                        <p className="mt-2 text-sm text-gray-600">{task.description}</p>
                      )}
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                        {task.agent_id && (
                          <span>Agent: {task.agent_id}</span>
                        )}
                        <span>Created {formatDistanceToNow(new Date(task.created_at))} ago</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[task.status]
                        }`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
