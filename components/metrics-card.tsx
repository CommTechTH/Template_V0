import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MetricsCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  chart?: React.ReactNode
}

export function MetricsCard({ title, value, icon, chart }: MetricsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {chart && <div className="mt-4 h-[80px]">{chart}</div>}
      </CardContent>
    </Card>
  )
}
