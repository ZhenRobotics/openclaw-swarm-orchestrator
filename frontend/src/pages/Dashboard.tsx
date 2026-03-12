import { useQuery } from '@tanstack/react-query'
import { Activity, Users, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react'
import { orchestratorApi } from '../services/api'

function StatCard({ title, value, icon: Icon, trend }: any) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                {trend && (
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    {trend}
                  </div>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { data: status, isLoading } = useQuery({
    queryKey: ['system-status'],
    queryFn: () => orchestratorApi.getStatus().then((res) => res.data),
    refetchInterval: 5000,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  const stats = status?.stats

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="mt-1 text-sm text-gray-500">
          System overview and statistics
        </p>
      </div>

      {/* System Status */}
      <div className="mb-6 bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">System Status</h3>
            <p className="mt-1 text-sm text-gray-500">
              Current orchestrator state
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className={`h-3 w-3 rounded-full mr-2 ${status?.redis_connected ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className="text-sm text-gray-600">Redis</span>
            </div>
            <div className="flex items-center">
              <div className={`h-3 w-3 rounded-full mr-2 ${status?.database_connected ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className="text-sm text-gray-600">Database</span>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {status?.status}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Agents"
          value={stats?.total_agents || 0}
          icon={Users}
        />
        <StatCard
          title="Active Agents"
          value={stats?.active_agents || 0}
          icon={Activity}
        />
        <StatCard
          title="Pending Tasks"
          value={stats?.pending_tasks || 0}
          icon={Clock}
        />
        <StatCard
          title="Running Tasks"
          value={stats?.running_tasks || 0}
          icon={AlertCircle}
        />
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
        <StatCard
          title="Completed Tasks"
          value={stats?.completed_tasks || 0}
          icon={CheckCircle}
        />
        <StatCard
          title="Failed Tasks"
          value={stats?.failed_tasks || 0}
          icon={XCircle}
        />
        <StatCard
          title="Total Tasks"
          value={stats?.total_tasks || 0}
          icon={Activity}
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
            Create Agent
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
            Create Task
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            View Logs
          </button>
        </div>
      </div>
    </div>
  )
}
