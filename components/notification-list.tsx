"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "warning" | "error" | "success"
  date: string
  read: boolean
}

export function NotificationList() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "n1",
      title: "New Ticket Assigned",
      message: "You have been assigned a new ticket: TKT-003",
      type: "info",
      date: "2 hours ago",
      read: false,
    },
    {
      id: "n2",
      title: "Ticket Status Updated",
      message: "Ticket TKT-001 has been marked as resolved",
      type: "success",
      date: "Yesterday",
      read: false,
    },
    {
      id: "n3",
      title: "Approaching Deadline",
      message: "Project X is due in 2 days",
      type: "warning",
      date: "Yesterday",
      read: true,
    },
    {
      id: "n4",
      title: "System Maintenance",
      message: "Scheduled maintenance on May 15th, 2023",
      type: "info",
      date: "3 days ago",
      read: true,
    },
    {
      id: "n5",
      title: "Critical Error",
      message: "Database connection failed on Server A",
      type: "error",
      date: "1 week ago",
      read: true,
    },
  ])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-50 border-l-4 border-blue-500"
      case "warning":
        return "bg-yellow-50 border-l-4 border-yellow-500"
      case "error":
        return "bg-red-50 border-l-4 border-red-500"
      case "success":
        return "bg-green-50 border-l-4 border-green-500"
      default:
        return "bg-gray-50 border-l-4 border-gray-500"
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "warning":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "error":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "success":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-md ${getTypeColor(notification.type)} ${notification.read ? "opacity-70" : ""}`}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium">{notification.title}</h3>
                <Badge variant="outline" className={getTypeBadge(notification.type)}>
                  {notification.type}
                </Badge>
                {!notification.read && <span className="h-2 w-2 rounded-full bg-blue-500"></span>}
              </div>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteNotification(notification.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}

      {notifications.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No notifications</p>
        </div>
      )}
    </div>
  )
}
