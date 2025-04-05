'use client';

export default function BlogPage() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create New Post
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Sample blog post - you can map through your actual blog posts here */}
        <div className="border rounded-lg p-4 hover:bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900">Sample Blog Post Title</h2>
          <p className="mt-2 text-gray-600">This is a sample blog post description. You can add more details about the post here.</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Posted on January 1, 2023</span>
            <div className="space-x-2">
              <button className="text-blue-600 hover:text-blue-800">Edit</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 