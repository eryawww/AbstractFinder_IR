export const SkeletonCard = () => (
  <div className="p-4 border rounded-lg shadow-sm bg-white space-y-3">
    <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse"></div>
    <div className="space-y-2">
      <div className="w-full h-4 bg-gray-100 rounded animate-pulse"></div>
      <div className="w-5/6 h-4 bg-gray-100 rounded animate-pulse"></div>
    </div>
    <div className="flex gap-2">
      <div className="w-20 h-6 bg-gray-100 rounded animate-pulse"></div>
      <div className="w-20 h-6 bg-gray-100 rounded animate-pulse"></div>
    </div>
  </div>
)