import { useQuery } from '@tanstack/react-query'
import { Plus, RefreshCw } from 'lucide-react'
import { agentsApi } from '../services/api'
import { AgentStatus } from '../types'

const statusColors = {
  [AgentStatus.IDLE]: 'bg-green-100 text-green-800',
  [AgentStatus.BUSY]: 'bg-blue-100 text-blue-800',
  [AgentStatus.OFFLINE]: 'bg-gray-100 text-gray-800',
  [AgentStatus.ERROR]: 'bg-red-100 text-red-800',
}

export default function Agents() {
  const { data: agents, isLoading, refetch } = useQuery({
    queryKey: ['agents'],
    queryFn: () => agentsApi.list().then((res) => res.data),
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading agents...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="sm:flex sm:items-center mb-6">
        <div className="sm:flex-auto">
          <h2 className="text-2xl font-bold text-gray-900">Agents</h2>
          <p className="mt-2 text-sm text-gray-700">
            Manage and monitor all registered agents
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex space-x-3">
          <button
            onClick={() => refetch()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md shadow-sm text-sm font-medium hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            New Agent
          </button>
        </div>
      </div>

      {agents && agents.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <Users className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No agents</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new agent.</p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md shadow-sm text-sm font-medium hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              New Agent
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {agents?.map((agent) => (
              <li key={agent.id}>
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-medium">
                            {agent.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                        <div className="text-sm text-gray-500">
                          {agent.type} • {agent.id}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-900">
                          {agent.tasks_completed} completed
                        </div>
                        <div className="text-sm text-gray-500">
                          {agent.tasks_failed} failed
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[agent.status]
                        }`}
                      >
                        {agent.status}
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

function Users({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}
