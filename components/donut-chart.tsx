"use client"

import { useEffect, useRef } from "react"

interface DonutChartProps {
  percentage: number
  color?: string
  size?: number
  strokeWidth?: number
}

export function DonutChart({ percentage, color = "#27688a", size = 100, strokeWidth = 10 }: DonutChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw background circle
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, (size - strokeWidth) / 2, 0, 2 * Math.PI)
    ctx.strokeStyle = "#e0e0e0"
    ctx.lineWidth = strokeWidth
    ctx.stroke()

    // Draw percentage arc
    const startAngle = -0.5 * Math.PI
    const endAngle = startAngle + (percentage / 100) * 2 * Math.PI

    ctx.beginPath()
    ctx.arc(size / 2, size / 2, (size - strokeWidth) / 2, startAngle, endAngle)
    ctx.strokeStyle = color
    ctx.lineWidth = strokeWidth
    ctx.stroke()

    // Draw percentage text
    ctx.font = "bold 20px Arial"
    ctx.fillStyle = "#000000"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${percentage}%`, size / 2, size / 2)
  }, [percentage, color, size, strokeWidth])

  return <canvas ref={canvasRef} width={size} height={size} className="mx-auto" />
}
