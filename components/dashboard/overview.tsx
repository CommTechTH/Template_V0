"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, CreditCard, DollarSign, Users } from "lucide-react"
import { useSession } from "next-auth/react"

interface DashboardOverviewProps {
  stats: {
    totalRevenue: number
    subscriptions: number
    sales: number
    activeUsers: number
  }
}

export function DashboardOverview({ stats }: DashboardOverviewProps) {
  const { data: session } = useSession()

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{stats.subscriptions}</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{stats.sales}</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, {session?.user?.name || "User"}!</CardTitle>
              <CardDescription>
                This is your dashboard overview. Here you can see a summary of your account activity.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="rounded-md border p-4">
                <h3 className="mb-2 font-medium">Getting Started</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                    Complete your profile information
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></span>
                    Set up your payment methods
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-red-500"></span>
                    Review your notification settings
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View detailed analytics about your account and activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] rounded-md border p-4">
                <p className="text-center text-muted-foreground">Analytics charts will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>View and download reports about your account activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] rounded-md border p-4">
                <p className="text-center text-muted-foreground">Reports will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>View your recent notifications and updates.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] rounded-md border p-4">
                <p className="text-center text-muted-foreground">No new notifications</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
