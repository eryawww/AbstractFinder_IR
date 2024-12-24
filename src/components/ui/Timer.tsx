// components/ui/Timer.tsx
import { useEffect, useState } from "react"

interface TimerProps {
  loading: boolean
}

export const Timer = ({ loading }: TimerProps) => {
  const [startTime, setStartTime] = useState(Date.now())
  const [elapsedTime, setElapsedTime] = useState(0)
  const [finalTime, setFinalTime] = useState<number | null>(null)

  useEffect(() => {
    if (loading) {
      setStartTime(Date.now())
      setElapsedTime(0)
      setFinalTime(null)
    }
  }, [loading])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (loading) {
      intervalId = setInterval(() => {
        setElapsedTime((Date.now() - startTime) / 1000)
      }, 10)
    } else if (elapsedTime > 0) {
      setFinalTime(elapsedTime)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [loading, startTime])

  if (!loading && !finalTime) return null

  return (
    <p className="text-sm text-gray-500 text-center">
      {loading
        ? `Query running for ${elapsedTime.toFixed(3)} seconds...`
        : `Query completed in ${finalTime?.toFixed(3)} seconds`}
    </p>
  )
}