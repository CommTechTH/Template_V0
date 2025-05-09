import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TicketList } from "@/components/ticket-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function TicketsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <Button className="bg-[#27688a] hover:bg-[#27688a]/90">
          <Plus className="mr-2 h-4 w-4" /> New Ticket
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Ticket Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="open">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="open">Open Tickets</TabsTrigger>
              <TabsTrigger value="closed">Closed Tickets</TabsTrigger>
              <TabsTrigger value="all">All Tickets</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="open" className="pt-4">
              <TicketList status="open" />
            </TabsContent>
            <TabsContent value="closed" className="pt-4">
              <TicketList status="closed" />
            </TabsContent>
            <TabsContent value="all" className="pt-4">
              <TicketList status="all" />
            </TabsContent>
            <TabsContent value="archived" className="pt-4">
              <TicketList status="archived" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
