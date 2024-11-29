export default function RoadmapLoading() {
  return (
    <div className="min-h-screen bg-secondary animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative pt-24 pb-12 bg-gradient-to-b from-gray-900 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 w-64 bg-gray-light/20 rounded-lg mx-auto mb-6"></div>
            <div className="h-6 w-96 bg-gray-light/20 rounded-lg mx-auto mb-8"></div>
            <div className="flex items-center justify-center space-x-6">
              <div className="h-10 w-32 bg-gray-light/20 rounded-full"></div>
              <div className="h-10 w-32 bg-gray-light/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {[1, 2, 3].map((section) => (
            <div key={section} className="bg-gray-light rounded-xl p-8">
              <div className="h-8 w-48 bg-gray-medium rounded-lg mb-4"></div>
              <div className="h-4 w-full bg-gray-medium rounded-lg mb-8"></div>
              
              <div className="space-y-4">
                {[1, 2, 3].map((topic) => (
                  <div key={topic} className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
                    <div className="w-6 h-6 bg-gray-medium rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-gray-medium rounded-lg mb-2"></div>
                      <div className="h-3 w-full bg-gray-medium rounded-lg"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
