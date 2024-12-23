import React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const LlmCard = React.forwardRef<HTMLDivElement, { answer: string }>(
    ({ answer: answer }, ref) => {
        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Assistant</CardTitle>
                    <CardDescription>{answer}</CardDescription>
                </CardHeader>
                {/* <CardContent>
                    <p>
                        answer
                    </p>
                </CardContent> */}
            </Card>
        )
    }
)

export { LlmCard }