// hooks/useSearch.ts
import { useEffect, useState } from 'react'
import RetrievedDocument from "@/lib/RetrievedDocument"
import { SEARCH_ENDPOINT } from "@/lib/const"
import { SearchResponse, ResultType } from '@/lib/types'

export const useSearch = () => {
  const [documents, setDocuments] = useState<RetrievedDocument[]>([])
  const [originalDocuments, setOriginalDocuments] = useState<RetrievedDocument[]>([])
  const [refinedDocuments, setRefinedDocuments] = useState<RetrievedDocument[]>([])
  const [resultType, setResultType] = useState<ResultType>('original')
  const [llmAnswer, setLlmAnswer] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [llmLoading, setLlmLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setDocuments(resultType === 'original' ? originalDocuments : refinedDocuments)
  }, [resultType, originalDocuments, refinedDocuments])

  useEffect(() => {
    const loadCachedResults = () => {
      try {
        const cached = sessionStorage.getItem('search_history')
        if (cached) {
          const { original, refined, type, answer } = JSON.parse(cached)
          setOriginalDocuments(original.map(RetrievedDocument.parse))
          setRefinedDocuments(refined.map(RetrievedDocument.parse))
          setResultType(type || 'original')
          if (answer) setLlmAnswer(answer)
        }
      } catch (err) {
        console.error('Error loading cached results:', err)
      }
    }
    loadCachedResults()
  }, [])

  const search = async (query: string) => {
    if (!query.trim()) return

    setLoading(true)
    setLlmLoading(true)
    setError(null)
    setLlmAnswer("")

    try {
      const response = await fetch(SEARCH_ENDPOINT(query))
      
      if (!response.ok) {
        // Only set error if it's a server error, not for no results
        if (response.status === 404) {
          setOriginalDocuments([])
          setRefinedDocuments([])
          return
        }
        throw new Error(`Search failed: ${response.statusText}`)
      }

      const data: SearchResponse = await response.json()
      
      const original = data.original.results.map(RetrievedDocument.parse)
      const refined = data.refined.results.map(RetrievedDocument.parse)
      
      setOriginalDocuments(original)
      setRefinedDocuments(refined)
      
      if (data.summarization) {
        setLlmAnswer(data.summarization)
      }

      sessionStorage.setItem('search_history', JSON.stringify({
        original,
        refined,
        type: resultType,
        answer: data.summarization
      }))

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during search'
      setError(errorMessage)
      setLlmAnswer("")
      setOriginalDocuments([])
      setRefinedDocuments([])
    } finally {
      setLoading(false)
      setLlmLoading(false)
    }
  }

  const toggleResultType = () => {
    const newType = resultType === 'original' ? 'refined' : 'original'
    setResultType(newType)
    const cached = sessionStorage.getItem('search_history')
    if (cached) {
      const data = JSON.parse(cached)
      sessionStorage.setItem('search_history', JSON.stringify({ ...data, type: newType }))
    }
  }

  return { 
    documents, 
    llmAnswer, 
    loading, 
    llmLoading,
    error, 
    search, 
    resultType, 
    toggleResultType 
  }
}