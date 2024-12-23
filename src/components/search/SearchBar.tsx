"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
  loading: boolean
}

export const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full gap-4 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm">
      <input
        id="input-query"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything"
        className="flex-grow text-gray-600 placeholder-gray-400 focus:outline-none"
      />
      <Button
        type="submit"
        disabled={loading}
        className="bg-black text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center">
            <span className="w-4 h-4 border-2 border-t-2 border-white rounded-full animate-spin mr-2"></span>
            Loading...
          </span>
        ) : (
          "Search"
        )}
      </Button>
    </form>
  )
}