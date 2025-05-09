import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NotificationsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button variant="outline">Mark all as read</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4 p-3 rounded-lg border-l-4 border-red-500 bg-red-50">
            <div className="flex-1">
              <div className="font-medium">Critical System Update</div>
              <div className="text-sm text-muted-foreground">
                The system will be down for maintenance on Sunday, May 12th from 2:00 AM to 4:00 AM EST.
              </div>
              <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
            </div>
            <Button variant="ghost" size="sm">
              Dismiss
            </Button>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-lg border-l-4 border-orange-500 bg-orange-50">
            <div className="flex-1">
              <div className="font-medium">New Ticket Assigned</div>
              <div className="text-sm text-muted-foreground">
                You have been assigned ticket #1234 - "Login page not working".
              </div>
              <div className="text-xs text-muted-foreground mt-1">5 hours ago</div>
            </div>
            <Button variant="ghost" size="sm">
              Dismiss
            </Button>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-lg border-l-4 border-yellow-500 bg-yellow-50">
            <div className="flex-1">
              <div className="font-medium">Project Milestone Approaching</div>
              <div className="text-sm text-muted-foreground">
                The "Design Phase" milestone for the Website Redesign project is due in 3 days.
              </div>
              <div className="text-xs text-muted-foreground mt-1">1 day ago</div>
            </div>
            <Button variant="ghost" size="sm">
              Dismiss
            </Button>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-lg border-l-4 border-gray-300 bg-gray-50">
            <div className="flex-1">
              <div className="font-medium">New Client Added</div>
              <div className="text-sm text-muted-foreground">
                A new client "Global Solutions Inc." has been added to the system.
              </div>
              <div className="text-xs text-muted-foreground mt-1">3 days ago</div>
            </div>
            <Button variant="ghost" size="sm">
              Dismiss
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
