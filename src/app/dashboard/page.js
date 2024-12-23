export default function DashboardPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="mt-2 text-gray-600">This is the main dashboard page where you can view statistics and manage your account.</p>
  
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Widgets */}
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-bold">Sales</h2>
            <p className="text-gray-600">This month`s sales: $10,000</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-bold">Users</h2>
            <p className="text-gray-600">Active users: 150</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-bold">Performance</h2>
            <p className="text-gray-600">Server uptime: 99.9%</p>
          </div>
        </div>
      </div>
    );
  }
  