"use client"

import useAuth from "../../hooks/withAuth";

export default function Dashboard() {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) return null; // Prevent rendering until authentication check

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
}
