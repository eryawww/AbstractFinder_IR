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
import { Recipe, SearchResultCard } from "@/components/ui/cardresult"
import { SEARCH_ENDPOINT, SEARCH_RESULT_HISTORY_CACHEKEY } from "@/lib/const"

type SearchComponentProps = React.HTMLAttributes<HTMLDivElement>

const SearchComponent = React.forwardRef<HTMLDivElement, SearchComponentProps>(
    ({ }, ref) => {
        const [queryType, setQueryType] = useState("Search by Name")
        const [queryValue, setQueryValue] = useState("")
        const [recipeList, setRecipeList] = useState<Recipe[]>([])
        const [loading, setLoading] = useState(false);

        const handleQueryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setQueryValue(e.target.value);
        }
        const handleQueryTypeInputChange = (newValue: string) => {
            let newPlaceholder = ""
            switch (queryType) {
                case "Search by Name":
                    newPlaceholder = "Find 'Fried Rice'"
                    break;
                case "Search by Ingredients":
                    newPlaceholder = "Find 'Tortillas Garlic Mozzarella cheese'"
                    break;
                case "Search by Category":
                    newPlaceholder = "Find 'Indian'"
                    break;
            }
            document.getElementById("input-query")?.setAttribute('placeholder', newPlaceholder)
            setQueryType(newValue)
        }
        const handleSearchClick = async () => {
            setLoading(true);
            try {
                let request_param = {}
                switch (queryType) {
                    case "Search by Name":
                        request_param = 'title'
                        break;
                    case "Search by Ingredients":
                        request_param = 'ingredients'
                        break;
                    case "Search by Category":
                        request_param = 'category'
                        break;
                }
                const response = await fetch(SEARCH_ENDPOINT + `?${request_param}=${queryValue}`, {
                    method: "GET"
                });
                if (!response.ok) {
                    throw new Error("Failed to send message");
                }
                const jsonData = await response.json();
                sessionStorage.setItem(SEARCH_RESULT_HISTORY_CACHEKEY, JSON.stringify(jsonData))

                const recipeList: Recipe[] = jsonData.map(Recipe.parse);
                setRecipeList(recipeList);
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
                const recipeList: Recipe[] = savedRecipeData.map(Recipe.parse);
                setRecipeList(recipeList);
            }

        }, [])

        return (
            <div ref={ref} className="p-8 space-y-8 rounded-lg shadow-xl m-8">
                {/* Header Section */}
                <div className="flex flex-col items-center space-y-6 py-12 bg-white">
                    <h1 className="text-4xl font-bold text-gray-900">Explore TasteGraph</h1>
                    <p className="text-lg text-gray-600 text-center">
                        Instantly Discover Flavors with TasteGraph – Your Culinary Knowledge Hub!
                    </p>
                </div>
                {/* Search Bar */}
                <div className="flex items-center w-full gap-4 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm w-full">
                    <input
                        id="input-query"
                        type="text"
                        placeholder="Find 'Fried Rice'"
                        onChange={handleQueryInputChange}
                        className="flex-grow text-gray-600 placeholder-gray-400 focus:outline-none"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                disabled={loading}
                                className="border-gray-300 text-gray-700 hover:bg-red-400 bg-blue-500 text-white"
                            >
                                {queryType}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 mt-2 rounded-md shadow-lg border border-gray-200">
                            <DropdownMenuLabel className="font-semibold text-gray-700">
                                Pilih Mode Pencarian
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                                value={queryType}
                                onValueChange={handleQueryTypeInputChange}
                            >
                                <DropdownMenuRadioItem value="Search by Name">
                                    Search by Name
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Search by Ingredients">
                                    Search by Ingredients
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Search by Category">
                                    Search by Category
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
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

                {/* Query Result */}
                <hr className="border-t border-gray-300" />
                <div className="w-full space-y-4">
                    {recipeList.length === 0 && !loading && (
                        <p className="text-center text-gray-500">No results found.</p>
                    )}
                    {recipeList.map((recipe, index) => (
                        <SearchResultCard recipe={recipe} key={index} />
                    ))}
                </div>
            </div>
        );
    }
)

export { SearchComponent };