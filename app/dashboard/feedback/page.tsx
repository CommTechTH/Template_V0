import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FeedbackList } from "@/components/feedback-list"

export default function FeedbackPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Feedback</h1>

      <Card>
        <CardHeader>
          <CardTitle>Client Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <FeedbackList />
        </CardContent>
      </Card>
    </div>
  )
}
