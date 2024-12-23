"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Document, SearchResultCard } from "@/components/ui/cardresult"
import { MOCK_LLM_ANSWER, MOCK_TASTEGRAPH_SEARCH_RESPONSE, SEARCH_ENDPOINT, SEARCH_RESULT_HISTORY_CACHEKEY } from "@/lib/const"
import { LlmCard } from "./llmCard"

type SearchComponentProps = React.HTMLAttributes<HTMLDivElement>

const SearchComponent = React.forwardRef<HTMLDivElement, SearchComponentProps>(
    ({ }, ref) => {
        const [queryValue, setQueryValue] = useState<string>("")
        const [documentList, setRecipeList] = useState<Document[]>([])
        const [llmAnswer, setLlmAnswer] = useState<string>("")
        const [loading, setLoading] = useState(false);

        const handleQueryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setQueryValue(e.target.value);
        }
        const handleSearchClick = async () => {
            setLoading(true);
            try {
                let request_param = {}
                let query = queryValue
                // TODO: configure backend request and remove mock
                // request two separate endpoint asyncronously
                const recipeList: Document[] = MOCK_TASTEGRAPH_SEARCH_RESPONSE.map(Document.parse);
                const llmAnswer: string = MOCK_LLM_ANSWER

                setRecipeList(recipeList);
                setLlmAnswer(llmAnswer);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        useEffect(() => {
            const searchResultJsonData = sessionStorage.getItem(SEARCH_RESULT_HISTORY_CACHEKEY)
            if (searchResultJsonData != null) {
                const savedRecipeData = JSON.parse(searchResultJsonData)
                const recipeList: Document[] = savedRecipeData.map(Document.parse);
                setRecipeList(recipeList);
            }

        }, [])

        return (
            <div ref={ref} className="p-8 space-y-8 rounded-lg shadow-xl">
                {/* Header Section */}
                <div className="flex flex-col items-center space-y-6 py-8 bg-white">
                    <h1 className="text-4xl font-bold text-gray-900">Explore AbstractFinder!</h1>
                    <p className="text-lg text-gray-600 text-center">
                        Connecting Ideas, One Abstract at a Time
                    </p>
                </div>
                {/* Search Bar */}
                <div className="flex items-center w-full gap-4 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm w-full">
                    <input
                        id="input-query"
                        type="text"
                        placeholder="Ask anything"
                        onChange={handleQueryInputChange}
                        className="flex-grow text-gray-600 placeholder-gray-400 focus:outline-none"
                    />
                    <Button
                        type="submit"
                        onClick={handleSearchClick}
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
                </div>
                { llmAnswer && <LlmCard answer={llmAnswer}/> }
                {/* Query Result */}
                <hr className="border-t border-gray-300" />
                <div className="w-full space-y-4">
                    {documentList.length === 0 && !loading && (
                        <p className="text-center text-gray-500">No results found.</p>
                    )}
                    {documentList.map((document, index) => (
                        <SearchResultCard document={document} key={index} />
                    ))}
                </div>
            </div>
        );
    }
)

export { SearchComponent };