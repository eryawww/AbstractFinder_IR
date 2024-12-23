import RetrievedDocument from "@/lib/RetrievedDocument"

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export interface ResultCardProps extends BaseCardProps {
  document: RetrievedDocument
}

export interface LlmCardProps extends BaseCardProps {
  answer: string
}
