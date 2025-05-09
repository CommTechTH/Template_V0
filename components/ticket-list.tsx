"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

type TicketStatus = "open" | "closed" | "all" | "archived"

interface Ticket {
  id: string
  title: string
  priority: "low" | "medium" | "high" | "critical"
  status: "open" | "in progress" | "resolved" | "closed"
  created: string
  updated: string
}

export function TicketList({ status }: { status: TicketStatus }) {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: "TKT-001",
      title: "Website not loading properly",
      priority: "high",
      status: "open",
      created: "2023-05-01",
      updated: "2023-05-02",
    },
    {
      id: "TKT-002",
      title: "Email configuration issue",
      priority: "medium",
      status: "in progress",
      created: "2023-05-03",
      updated: "2023-05-04",
    },
    {
      id: "TKT-003",
      title: "Database connection error",
      priority: "critical",
      status: "open",
      created: "2023-05-05",
      updated: "2023-05-05",
    },
    {
      id: "TKT-004",
      title: "User login problem",
      priority: "high",
      status: "resolved",
      created: "2023-04-28",
      updated: "2023-05-01",
    },
    {
      id: "TKT-005",
      title: "Feature request: dark mode",
      priority: "low",
      status: "closed",
      created: "2023-04-20",
      updated: "2023-04-25",
    },
  ])

  // Filter tickets based on status
  const filteredTickets = tickets.filter((ticket) => {
    if (status === "all") return true
    if (status === "open") return ticket.status === "open" || ticket.status === "in progress"
    if (status === "closed") return ticket.status === "closed" || ticket.status === "resolved"
    if (status === "archived") return false // No archived tickets in this demo
    return true
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "high":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100"
      case "critical":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "in progress":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      case "resolved":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "closed":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticket ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell>{ticket.created}</TableCell>
                <TableCell>{ticket.updated}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-4">
                No tickets found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
