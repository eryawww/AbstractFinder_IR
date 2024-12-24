// components/search/SearchResults.tsx
import { useEffect, useState } from "react"
import { SearchResultCard } from "@/components/ui/cards/SearchResultCard"
import { Timer } from "@/components/ui/Timer"
import { LoadingMessage } from "@/components/ui/LoadingMessage"
import { SkeletonCard } from "@/components/ui/cards/SkeletonCard"
import { Pagination } from "@/components/ui/Pagination"
import { NoResultsState } from "./NoResultsState"
import RetrievedDocument from "@/lib/RetrievedDocument"

const ITEMS_PER_PAGE = 10

interface SearchResultsProps {
  documents: RetrievedDocument[]
  loading: boolean
  hasSearched: boolean
  searchQuery?: string
}

const InitialState = () => (
  <div className="flex flex-col items-center justify-center py-12 text-gray-500">
    <div className="w-12 h-12 mb-4 opacity-50">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
    <p className="text-lg">Enter your query above to start searching</p>
    <p className="text-sm mt-2">Search through academic papers and research documents</p>
  </div>
)

export const SearchResults = ({ 
  documents, 
  loading, 
  hasSearched,
  searchQuery 
}: SearchResultsProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  // Reset to first page when documents change
  useEffect(() => {
    setCurrentPage(1)
  }, [documents])

  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentDocuments = documents.slice(startIndex, endIndex)

  // Show initial state if user hasn't searched yet
  if (!hasSearched && !loading) {
    return <InitialState />
  }

  return (
    <div className="w-full space-y-4">
      <Timer loading={loading} />
      {loading ? (
        <>
          <LoadingMessage />
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </>
      ) : documents.length === 0 ? (
        <NoResultsState searchQuery={searchQuery} />
      ) : (
        <>
          {currentDocuments.map((document, index) => (
            <SearchResultCard 
              document={document} 
              key={`${document.docid}-${index}`} 
            />
          ))}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={documents.length}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          )}
        </>
      )}
    </div>
  )
}