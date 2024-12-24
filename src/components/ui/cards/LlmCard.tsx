import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./base-card";
import { cn } from "@/lib/utils";

interface LlmCardProps {
  answer?: string;
  isLoading?: boolean;
  className?: string;
}

export const LlmCard = React.forwardRef<HTMLDivElement, LlmCardProps>(
  ({ answer, isLoading = false, className, ...props }, ref) => (
    <Card 
      ref={ref} 
      className={cn(
        "w-full",
        !isLoading && "animate-in fade-in-0 slide-in-from-bottom-8 duration-500 motion-safe:transition-all motion-safe:ease-out",
        className
      )} 
      {...props}
    >
      <CardHeader>
        <CardTitle>
          {isLoading ? (
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
          ) : (
            "Retrieval Summarization"
          )}
        </CardTitle>
        <CardDescription>
          {isLoading ? (
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
          ) : (
            <div className="prose prose-sm max-w-none">
              {answer}
            </div>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  )
);

LlmCard.displayName = "LlmCard";