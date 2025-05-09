"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, Pie, PieChart } from "recharts"

export function ProjectSummary() {
  const projectData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 200 },
    { name: "May", value: 350 },
    { name: "Jun", value: 450 },
  ]

  const pieData = [
    { name: "Completed", value: 60, fill: "#4dcf6a" },
    { name: "In Progress", value: 30, fill: "#ffda24" },
    { name: "Not Started", value: 10, fill: "#d3453e" },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Project Progress</CardTitle>
          <CardDescription>Monthly project completion rate</CardDescription>
        </CardHeader>
        <CardContent className="h-[200px]">
          <ChartContainer
            config={{
              value: {
                label: "Value",
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <LineChart
              data={projectData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line type="monotone" dataKey="value" stroke="#27688a" strokeWidth={2} activeDot={{ r: 6 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
          <CardDescription>Current status of all projects</CardDescription>
        </CardHeader>
        <CardContent className="h-[200px] flex justify-center">
          <ChartContainer
            config={{
              value: {
                label: "Value",
              },
            }}
          >
            <PieChart width={200} height={200}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
