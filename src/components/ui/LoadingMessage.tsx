// components/ui/LoadingMessage.tsx
import { useEffect, useState } from "react"

export const LoadingMessage = () => {
  const [messageIndex, setMessageIndex] = useState(0)
  const loadingMessages = [
    "Scanning research databases...",
    "Analyzing academic papers...",
    "Matching semantic patterns...",
    "Retrieving relevant abstracts...",
    "Evaluating research relevance..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev === loadingMessages.length - 1) return prev;
        return prev + 1;
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
      </div>
      <p className="text-gray-600 animate-pulse">
        {loadingMessages[messageIndex]}
      </p>
    </div>
  )
}