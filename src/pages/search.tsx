"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
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

const ENDPOINT = 'http://127.0.0.1:8000/api/v1/recipes/search/'

type SearchComponentProps = React.HTMLAttributes<HTMLDivElement>

const SearchComponent = React.forwardRef<HTMLDivElement, SearchComponentProps>(
    ({ }, ref) => {
        const [queryType, setQueryType] = useState("Search by Nama")
        const [queryValue, setQueryValue] = useState("")
        const [recipeList, setRecipeList] = useState<Recipe[]>([])
        const [loading, setLoading] = useState(false);

        const handleQueryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setQueryValue(e.target.value);
        };

        const searchCallback = async () => {
            setLoading(true);
            try {
                // TODO: Change the endpoint according to queryType
                const response = await fetch(ENDPOINT + queryValue, {
                    method: "GET",
                });
                if (!response.ok) {
                    throw new Error("Failed to send message");
                }
                const jsonData = await response.json();
                const recipeList: Recipe[] = jsonData.map(Recipe.parse);
                setRecipeList(recipeList);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        return (
            <div ref={ref} className="p-8">
                {/* Search Bar */}
                <div className="flex w-full">
                    <div className="flex w-full items-center space-x-4 mr-8">
                        <Input id="input-query" type="text" placeholder='Cari "Nasi Goreng"' onChange={handleQueryInputChange} />
                        <Button type="submit" onClick={searchCallback} disabled={loading}>
                            {loading ? (
                                <span className="flex items-center">
                                    <span className="spinner-border animate-spin mr-2"></span> {/* Spinner */}
                                    Loading...
                                </span>
                            ) : (
                                "Search"
                            )}
                        </Button>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" disabled={loading}>
                                {queryType}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Pilih Mode Pencarian</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={queryType} onValueChange={setQueryType}>
                                <DropdownMenuRadioItem value="Search by Nama">
                                    Search by Nama
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Search by Bahan">
                                    Search by Bahan
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Search by Kategori">
                                    Search by Kategori
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {/* Query Result */}
                <hr className="py-6" />
                <div className="w-full space-y-4">
                    {recipeList.map((recipe, index) => (
                        <SearchResultCard recipe={recipe} key={index} />
                    ))}
                </div>
            </div>
        );
    }
)

export default SearchComponent;