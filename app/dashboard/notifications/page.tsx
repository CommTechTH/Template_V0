import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationList } from "@/components/notification-list"

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Notifications</h1>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <NotificationList />
        </CardContent>
      </Card>
    </div>
  )
}
