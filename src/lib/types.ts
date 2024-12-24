import RetrievedDocument from "./RetrievedDocument";

export interface SearchResult {
  query: string;
  results: RetrievedDocument[];
}

export interface SearchResponse {
  original: {
    results: SearchResult[]
  }
  refined: {
    results: SearchResult[]
  }
  summarization: string
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalItems: number
  itemsPerPage: number
}
  
export type ResultType = 'original' | 'refined';