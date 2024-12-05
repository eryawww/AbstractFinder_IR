import React from "react"
import Link from 'next/link'

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
import { useRouter } from 'next/navigation'

import Recipe from "@/lib/Recipe"
import { INFOPAGE_ROUTE_PARAMS } from "@/lib/const"

const SearchResultCard = React.forwardRef<HTMLDivElement, {recipe: Recipe }>(
    ({ recipe }, ref) => {
        const router = useRouter()
        const handleNavigateMoreInfo = (data: Recipe) => {
            const jsonData = Recipe.to_json(data)
            sessionStorage.setItem(INFOPAGE_ROUTE_PARAMS, JSON.stringify(jsonData))
            router.push('/info')
        }

        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardDescription>{recipe.cuisine}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        {recipe.description}
                    </p>
                </CardContent>
                <CardFooter className="flex space-x-4">
                    <Button variant="outline">
                        <a href={recipe.url}>Recipe Website</a></Button>
                    <Button onClick={() => handleNavigateMoreInfo(recipe)}>
                        Show More Information
                    </Button>
                </CardFooter>
            </Card>
        )
    }
)

export { Recipe, SearchResultCard }