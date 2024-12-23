import { SearchResultCard } from "@/components/ui/cards/SearchResultCard"
import RetrievedDocument from "@/lib/RetrievedDocument"

interface SearchResultsProps {
    documents: RetrievedDocument[]
    loading: boolean
  }
  
  export const SearchResults = ({ documents, loading }: SearchResultsProps) => (
    <div className="w-full space-y-4">
      {documents.length === 0 && !loading && (
        <p className="text-center text-gray-500">No results found.</p>
      )}
      {documents.map((document, index) => (
        <SearchResultCard document={document} key={index} />
      ))}
    </div>
  )  