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

export const SearchResults = ({ 
  documents, 
  loading, 
  hasSearched,
  searchQuery 
}: SearchResultsProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    setCurrentPage(1)
  }, [documents])

  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentDocuments = documents.slice(startIndex, endIndex)

  if (!hasSearched && !loading) {
    return <NoResultsState />
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
          <div className="space-y-4">
            {currentDocuments.map((document, index) => (
              <div
                key={`${document.docid}-${index}`}
                className="transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: loading ? 0 : 1,
                }}
              >
                <SearchResultCard document={document} />
              </div>
            ))}
          </div>
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