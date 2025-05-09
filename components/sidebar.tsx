"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Ticket, Users, BarChart3, Bell, MessageSquare, Settings } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Project Overview", href: "/dashboard/project-overview", icon: BarChart3 },
  { name: "Client Overview", href: "/dashboard/client-overview", icon: Users },
  { name: "Tickets", href: "/dashboard/tickets", icon: Ticket },
  { name: "Client Management", href: "/dashboard/client-management", icon: Users },
  { name: "Ticket Management", href: "/dashboard/ticket-management", icon: Ticket },
  { name: "Ticket Metrics", href: "/dashboard/ticket-metrics", icon: BarChart3 },
  { name: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-[#e0e0e0] flex flex-col h-full">
      <div className="p-4 border-b border-[#e0e0e0] flex items-center">
        <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="h-8 w-8 mr-2" />
        <span className="font-semibold text-lg">Portal</span>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                    isActive ? "bg-[#27688a] text-white" : "text-[#616060] hover:bg-[#f7f7f7]",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
