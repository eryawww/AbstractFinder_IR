import React from "react"

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

class Recipe {
    title: string;
    description: string;
    cuisine: string;
    url: string;
    wikidata: string | null;

    constructor(
        title: string,
        description: string,
        cuisine: string,
        url: string,
        wikidata: string | null
    ) {
        this.title = title;
        this.description = description;
        this.cuisine = cuisine;
        this.url = url;
        this.wikidata = wikidata;
    }

    static parse(json: any): Recipe {
        return new Recipe(
            json.title,
            json.description,
            json.cuisine,
            json.url,
            json.wikidata
        );
    }
}


const SearchResultCard = React.forwardRef<HTMLDivElement, {recipe: Recipe }>(
    ({ recipe }, ref) => {
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
                    <Button variant="outline">Recipe Website</Button>
                    <Button>Show More Information</Button>
                </CardFooter>
            </Card>
        )
    }
)

export { Recipe, SearchResultCard }