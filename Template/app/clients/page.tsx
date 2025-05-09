import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonutChart } from "@/components/donut-chart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Project Client Overview</h1>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search clients..." className="w-full pl-8" />
        </div>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Client Project 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px]">
                  <DonutChart percentage={65} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Budget</div>
                  <div className="font-medium">$12,500</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                  <div className="font-medium">8 weeks</div>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-4">
              <Button className="w-full bg-[#27688a] hover:bg-[#1d4d66]">View Details</Button>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px]">
                  <DonutChart percentage={85} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Budget</div>
                  <div className="font-medium">$9,800</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                  <div className="font-medium">6 weeks</div>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-4">
              <Button className="w-full bg-[#27688a] hover:bg-[#1d4d66]">View Details</Button>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Project 3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px]">
                  <DonutChart percentage={35} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Budget</div>
                  <div className="font-medium">$15,200</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                  <div className="font-medium">12 weeks</div>
                </div>
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
