import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard"
                 className="block p-2 hover:bg-gray-700 rounded" >
                 Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
