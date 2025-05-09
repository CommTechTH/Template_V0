"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"

export function ProjectOverviewCharts() {
  const taskData = [
    { name: "Completed", value: 63, fill: "#4dcf6a" },
    { name: "In Progress", value: 27, fill: "#ffda24" },
    { name: "Not Started", value: 10, fill: "#d3453e" },
  ]

  const budgetData = [
    { name: "Spent", value: 70, fill: "#27688a" },
    { name: "Remaining", value: 30, fill: "#d9d9d9" },
  ]

  const timelineData = [
    { name: "Elapsed", value: 45, fill: "#27688a" },
    { name: "Remaining", value: 55, fill: "#d9d9d9" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col items-center">
        <h3 className="text-sm font-medium mb-2">Tasks</h3>
        <ChartContainer
          config={{
            value: {
              label: "Value",
            },
          }}
          className="h-[150px]"
        >
          <PieChart width={150} height={150}>
            <Pie data={taskData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value" />
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
        <div className="mt-2 text-center">
          <div className="text-xs text-muted-foreground">63% Complete</div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-sm font-medium mb-2">Budget</h3>
        <ChartContainer
          config={{
            value: {
              label: "Value",
            },
          }}
          className="h-[150px]"
        >
          <PieChart width={150} height={150}>
            <Pie
              data={budgetData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
        <div className="mt-2 text-center">
          <div className="text-xs text-muted-foreground">70% Used</div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-sm font-medium mb-2">Timeline</h3>
        <ChartContainer
          config={{
            value: {
              label: "Value",
            },
          }}
          className="h-[150px]"
        >
          <PieChart width={150} height={150}>
            <Pie
              data={timelineData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
        <div className="mt-2 text-center">
          <div className="text-xs text-muted-foreground">45% Elapsed</div>
        </div>
      </div>
    </div>
  )
}
