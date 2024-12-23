import RetrievedDocument from "./RetrievedDocument";

export interface SearchResult {
  query: string;
  results: RetrievedDocument[];
}

export interface SearchResponse {
  original: SearchResult;
  refined: SearchResult;
}
  
export type ResultType = 'original' | 'refined';