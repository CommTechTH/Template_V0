import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricsCard } from "@/components/metrics-card"
import { DonutChart } from "@/components/donut-chart"
import { BarChart3, Users, Ticket } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome, Username...</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Project</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Project Name</div>
                <div className="font-medium">Website Redesign</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Client</div>
                <div className="font-medium">Acme Inc.</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Status</div>
                <div className="font-medium">In Progress</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Start Date</div>
                <div className="font-medium">Jan 15, 2023</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">End Date</div>
                <div className="font-medium">Mar 30, 2023</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-xl font-bold pt-4">Metrics Summary</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricsCard
            title="Total Projects"
            value="12"
            icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
          />
          <MetricsCard title="Active Clients" value="8" icon={<Users className="h-4 w-4 text-muted-foreground" />} />
          <MetricsCard title="Open Tickets" value="24" icon={<Ticket className="h-4 w-4 text-muted-foreground" />} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Completion</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-[200px] h-[200px]">
                <DonutChart percentage={65} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ticket Resolution</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-[200px] h-[200px]">
                <DonutChart percentage={78} color="#4dcf6a" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
