import React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "./base-card"
import { LlmCardProps } from "./types"
import { cn } from "@/lib/utils"

export const LlmCard = React.forwardRef<HTMLDivElement, LlmCardProps>(
  ({ answer, className, ...props }, ref) => (
    <Card ref={ref} className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>Assistant</CardTitle>
        <CardDescription>
          <div className="prose prose-sm max-w-none">
            {answer}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  )
)
LlmCard.displayName = "LlmCard"