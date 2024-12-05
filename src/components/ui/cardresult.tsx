import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Button } from "./button"
import {
    Select,
    SelectTrigger,
    SelectItem,
    SelectValue,
    SelectContent
} from "@radix-ui/react-select"
import { FaHeart } from "react-icons/fa";
import { TbBowlFilled } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";

import Recipe from "@/lib/Recipe"
import { INFOPAGE_ROUTE_PARAMS_CACHEKEY } from "@/lib/const"

const SearchResultCard = React.forwardRef<HTMLDivElement, { recipe: Recipe }>(
    ({ recipe }, ref) => {
        const router = useRouter()
        const handleNavigateMoreInfo = (data: Recipe) => {
            const jsonData = Recipe.to_json(data)
            sessionStorage.setItem(INFOPAGE_ROUTE_PARAMS_CACHEKEY, JSON.stringify(jsonData))
            router.push('/info')
        }

        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardDescription>{recipe.cuisine} Cuisine</CardDescription>
                </CardHeader>
                <CardContent>
                    { recipe.description &&
                        <p>
                            {recipe.description}
                        </p>
                    }
                </CardContent>
                <CardFooter className="flex flex-col items-start pl-6 space-y-2">
                    <div className="flex space-x-2">
                        {recipe.category &&
                            <div className="flex bg-orange-500 rounded p-2 space-x-2">
                                <CardDescription className="text-white text-center">{recipe.category}</CardDescription>
                                <BiSolidCategory />
                            </div>
                        }
                        <div className="flex bg-red-400 rounded p-2 space-x-2">
                            <CardDescription className="text-white text-center">
                                {recipe.loves} </CardDescription>
                            <FaHeart />
                        </div>
                        {recipe.cuisine &&
                            <div className="flex bg-green-500 rounded p-2 space-x-2">
                                <CardDescription className="text-white text-center">
                                    {recipe.diet} </CardDescription>
                                <TbBowlFilled />
                            </div>
                        }
                    </div>
                    <Button onClick={() => handleNavigateMoreInfo(recipe)}>
                        Show More Information
                    </Button>
                </CardFooter>
            </Card>
        )
    }
)

export { Recipe, SearchResultCard }