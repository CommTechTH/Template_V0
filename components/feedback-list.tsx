"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StarRating } from "@/components/star-rating"

interface Feedback {
  id: string
  clientName: string
  projectName: string
  rating: number
  date: string
}

export function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: "f1",
      clientName: "Acme Corp",
      projectName: "Website Redesign",
      rating: 5,
      date: "2023-05-01",
    },
    {
      id: "f2",
      clientName: "TechStart Inc",
      projectName: "Mobile App Development",
      rating: 4,
      date: "2023-04-28",
    },
    {
      id: "f3",
      clientName: "Global Services",
      projectName: "CRM Implementation",
      rating: 5,
      date: "2023-04-25",
    },
    {
      id: "f4",
      clientName: "Retail Solutions",
      projectName: "E-commerce Platform",
      rating: 3,
      date: "2023-04-20",
    },
    {
      id: "f5",
      clientName: "Healthcare Plus",
      projectName: "Patient Portal",
      rating: 4,
      date: "2023-04-15",
    },
  ])

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {feedbacks.map((feedback) => (
            <TableRow key={feedback.id}>
              <TableCell className="font-medium">{feedback.clientName}</TableCell>
              <TableCell>{feedback.projectName}</TableCell>
              <TableCell>
                <StarRating rating={feedback.rating} />
              </TableCell>
              <TableCell>{feedback.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
