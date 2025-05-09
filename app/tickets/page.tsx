import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TicketsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tickets..." className="w-full pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button className="bg-[#27688a] hover:bg-[#1d4d66]">
            <Plus className="h-4 w-4 mr-2" />
            New Ticket
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">#1234</TableCell>
                <TableCell>Login page not working</TableCell>
                <TableCell>Acme Inc.</TableCell>
                <TableCell>
                  <span className="status-badge green">Open</span>
                </TableCell>
                <TableCell>
                  <span className="status-badge red">High</span>
                </TableCell>
                <TableCell>2 days ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#1235</TableCell>
                <TableCell>Mobile menu issues</TableCell>
                <TableCell>XYZ Corp</TableCell>
                <TableCell>
                  <span className="status-badge blue">In Progress</span>
                </TableCell>
                <TableCell>
                  <span className="status-badge yellow">Medium</span>
                </TableCell>
                <TableCell>3 days ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#1236</TableCell>
                <TableCell>Payment gateway error</TableCell>
                <TableCell>123 Industries</TableCell>
                <TableCell>
                  <span className="status-badge green">Open</span>
                </TableCell>
                <TableCell>
                  <span className="status-badge red">High</span>
                </TableCell>
                <TableCell>1 week ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
