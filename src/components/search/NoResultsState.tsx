interface NoResultsStateProps {
  searchQuery?: string
}

export const NoResultsState = ({ searchQuery }: NoResultsStateProps) => (
  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
    <div className="w-12 h-12 mb-4">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-gray-400"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 11h6" />
      </svg>
    </div>
    <h3 className="text-lg font-medium text-gray-700 mb-2">
      No results found{searchQuery ? ` for "${searchQuery}"` : ""}
    </h3>
    <div className="text-sm max-w-md mx-auto text-center space-y-2">
      <p>Try adjusting your search with these tips:</p>
      <ul className="space-y-1">
        <li>• Check for spelling errors</li>
        <li>• Try more general keywords</li>
        <li>• Remove filters or quotes</li>
        <li>• Use synonyms or alternative terms</li>
      </ul>
    </div>
  </div>
)