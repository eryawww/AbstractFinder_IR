"use client"

import { SearchBar } from './SearchBar'
import { SearchResults } from './SearchResults'
import { LlmCard } from "@/components/ui/cards/LlmCard"
import { useSearch } from '@/hooks/useSearch'

export const SearchContainer = () => {
  const { documents, llmAnswer, loading, error, search, resultType, toggleResultType } = useSearch()

  return (
    <div className="p-8 space-y-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center space-y-6 py-8 bg-white">
        <h1 className="text-4xl font-bold text-gray-900">Explore AbstractFinder!</h1>
        <p className="text-lg text-gray-600 text-center">
          Connecting Ideas, One Abstract at a Time
        </p>
      </div>
      <SearchBar onSearch={search} loading={loading} />
      {error && (
        <div className="p-4 text-sm border border-red-200 bg-red-50 text-red-600 rounded-lg">
          <p className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        </div>
      )}
      {llmAnswer && <LlmCard answer={llmAnswer} />}
      <hr className="border-t border-gray-300" />
      {documents.length > 0 && (
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleResultType}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {resultType === 'original' ? 'Show Refined Results' : 'Show Original Results'}
          </button>
        </div>
      )}
      <SearchResults documents={documents} loading={loading} />
    </div>
  )
}