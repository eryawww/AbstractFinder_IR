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

import Document from "@/lib/Recipe"
import { INFOPAGE_ROUTE_PARAMS_CACHEKEY } from "@/lib/const"

const SearchResultCard = React.forwardRef<HTMLDivElement, { document: Document }>(
    ({ document: document }, ref) => {
        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>{document.title}</CardTitle>
                    <CardDescription>Written by {document.author}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        {document.text}
                    </p>
                </CardContent>
            </Card>
        )
    }
)

export { Document, SearchResultCard }