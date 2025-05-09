import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonutChart } from "@/components/donut-chart"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Project Overview</h1>
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
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Design</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-[120px] h-[120px]">
                <DonutChart percentage={75} />
              </div>
            </CardContent>
            <div className="px-6 pb-4">
              <Button className="w-full bg-[#27688a] hover:bg-[#1d4d66]">View Details</Button>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-[120px] h-[120px]">
                <DonutChart percentage={45} />
              </div>
            </CardContent>
            <div className="px-6 pb-4">
              <Button className="w-full bg-[#27688a] hover:bg-[#1d4d66]">View Details</Button>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Testing</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-[120px] h-[120px]">
                <DonutChart percentage={20} />
              </div>
            </CardContent>
            <div className="px-6 pb-4">
              <Button className="w-full bg-[#27688a] hover:bg-[#1d4d66]">View Details</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
