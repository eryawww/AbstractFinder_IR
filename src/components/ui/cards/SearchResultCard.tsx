import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./base-card"
import { ResultCardProps } from "./types"
import { cn } from "@/lib/utils"

export const SearchResultCard = React.forwardRef<HTMLDivElement, ResultCardProps>(
  ({ document, className, ...props }, ref) => {
    const truncateText = (text: string, wordLimit: number) => {
      const words = text.split(' ')
      if (words.length <= wordLimit) return text
      return words.slice(0, wordLimit).join(' ') + '...'
    }

    return (
      <Card 
        ref={ref} 
        className={cn(
          "w-full animate-in fade-in-0 slide-in-from-bottom-8 duration-500",
          "motion-safe:transition-all motion-safe:ease-out",
          className
        )} 
        {...props}
      >
        <CardHeader>
          <CardTitle>{document.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-hidden">
            <p className="text-gray-700 leading-relaxed">
              {truncateText(document.text, 50)}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }
)

SearchResultCard.displayName = "SearchResultCard"