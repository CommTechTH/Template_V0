import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectOverviewCharts } from "@/components/project-overview-charts"

export default function ProjectOverviewPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Project Overview</h1>

      <Card>
        <CardHeader>
          <CardTitle>Active Project</CardTitle>
          <CardDescription>Project metrics and status</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-4">
              <ProjectOverviewCharts />
            </TabsContent>
            <TabsContent value="timeline" className="pt-4">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Timeline chart would appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="budget" className="pt-4">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Budget chart would appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
