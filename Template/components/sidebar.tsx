"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Users, Ticket, Bell, Home, Star, Settings } from "lucide-react"

interface SidebarProps {
  userName?: string
  userRole?: string
}

export function Sidebar({ userName = "Username", userRole = "Admin" }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="w-64 border-r h-screen flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#27688a]"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </div>
      </div>
      <div className="p-4 border-b">
        <div className="text-sm font-medium">Welcome, {userName}</div>
        <div className="text-xs text-muted-foreground">{userRole}</div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <Link href="/dashboard" className={`sidebar-link ${isActive("/dashboard") ? "active" : ""}`}>
          <Home className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
        <Link href="/projects" className={`sidebar-link ${isActive("/projects") ? "active" : ""}`}>
          <BarChart3 className="w-4 h-4" />
          <span>Projects</span>
        </Link>
        <Link href="/clients" className={`sidebar-link ${isActive("/clients") ? "active" : ""}`}>
          <Users className="w-4 h-4" />
          <span>Clients</span>
        </Link>
        <Link href="/tickets" className={`sidebar-link ${isActive("/tickets") ? "active" : ""}`}>
          <Ticket className="w-4 h-4" />
          <span>Tickets</span>
        </Link>
        <Link href="/notifications" className={`sidebar-link ${isActive("/notifications") ? "active" : ""}`}>
          <Bell className="w-4 h-4" />
          <span>Notifications</span>
        </Link>
        <Link href="/feedback" className={`sidebar-link ${isActive("/feedback") ? "active" : ""}`}>
          <Star className="w-4 h-4" />
          <span>Feedback</span>
        </Link>
        <Link href="/settings" className={`sidebar-link ${isActive("/settings") ? "active" : ""}`}>
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  )
}
