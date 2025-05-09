"use client"

import * as React from "react"
import type { TooltipProps } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

import { cn } from "@/lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

interface ChartContextValue {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextValue>({
  config: {},
})

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({ config, children, className, ...props }: ChartContainerProps) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div className={cn("", className)} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  )
}

export function ChartTooltip({ active, payload, label, content, ...props }: TooltipProps<ValueType, NameType>) {
  if (!active || !payload?.length) {
    return null
  }

  if (content) {
    return content
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-flow-col gap-2">
        <div className="font-medium">{label}</div>
      </div>
      <div className="mt-1 grid gap-0.5">
        {payload.map((item, index) => (
          <div key={index} className="grid grid-flow-col items-center gap-2">
            <div className="h-1 w-4 rounded-full" style={{ background: item.color }} />
            <span className="text-xs text-muted-foreground">{item.name}: </span>
            <span className="text-xs font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChartTooltipContent() {
  const { config } = React.useContext(ChartContext)

  return (
    <ChartTooltip
      content={({ active, payload, label }) => {
        if (!active || !payload?.length) {
          return null
        }

        return (
          <div className="rounded-lg border bg-background p-2 shadow-sm">
            <div className="grid grid-flow-col gap-2">
              <div className="font-medium">{label}</div>
            </div>
            <div className="mt-1 grid gap-0.5">
              {payload.map((item, index) => {
                const configKey = Object.keys(config).find((key) => key === item.dataKey)
                const color = config[configKey as string]?.color

                return (
                  <div key={index} className="grid grid-flow-col items-center gap-2">
                    <div
                      className="h-1 w-4 rounded-full"
                      style={{
                        background: color ?? item.color,
                      }}
                    />
                    <span className="text-xs text-muted-foreground">{item.name}: </span>
                    <span className="text-xs font-medium">{item.value}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }}
    />
  )
}
