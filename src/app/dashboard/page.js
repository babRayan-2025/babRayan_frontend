'use client';

export default function DashboardPage() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">
        This is your personal dashboard where you can manage your profile, blog posts, and settings.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-900">Profile</h2>
          <p className="mt-2 text-blue-700">Manage your personal information and preferences</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-green-900">Blog</h2>
          <p className="mt-2 text-green-700">Create and manage your blog posts</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-purple-900">Settings</h2>
          <p className="mt-2 text-purple-700">Configure your account settings</p>
        </div>
      </div>
    </div>
  );
} 