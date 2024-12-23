import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./base-card"
import { ResultCardProps } from "./types"
import { cn } from "@/lib/utils"

export const SearchResultCard = React.forwardRef<HTMLDivElement, ResultCardProps>(
  ({ document, className, ...props }, ref) => (
    <Card ref={ref} className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">{document.text}</p>
      </CardContent>
    </Card>
  )
)
SearchResultCard.displayName = "SearchResultCard"