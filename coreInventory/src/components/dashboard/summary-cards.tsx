import { Package, Boxes, AlertTriangle, PackagePlus, Truck, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { dashboardStats } from "@/lib/sample-data"

const summaryData = [
  {
    title: "Total Products",
    value: dashboardStats.totalProducts.toLocaleString(),
    change: "+12.5%",
    trend: "up" as const,
    icon: Package,
    description: "from last month",
    positive: true,
  },
  {
    title: "Total Stock",
    value: dashboardStats.totalStock.toLocaleString(),
    change: "+8.3%",
    trend: "up" as const,
    icon: Boxes,
    description: "units in inventory",
    positive: true,
  },
  {
    title: "Low Stock Items",
    value: dashboardStats.lowStockItems.toString(),
    change: "-4",
    trend: "down" as const,
    icon: AlertTriangle,
    description: "needs attention",
    positive: true,
  },
  {
    title: "Incoming Shipments",
    value: dashboardStats.incomingShipments.toString(),
    change: "+3",
    trend: "up" as const,
    icon: PackagePlus,
    description: "pending receipts",
    positive: true,
  },
  {
    title: "Outgoing Deliveries",
    value: dashboardStats.outgoingDeliveries.toString(),
    change: "+2",
    trend: "up" as const,
    icon: Truck,
    description: "in progress",
    positive: true,
  },
]

export function SummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {summaryData.map((item) => (
        <Card key={item.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            <div className="rounded-md bg-primary/10 p-2">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              {item.trend === "up" ? (
                <TrendingUp className={`h-3 w-3 ${item.positive ? "text-emerald-500" : "text-destructive"}`} />
              ) : (
                <TrendingDown className={`h-3 w-3 ${item.positive ? "text-emerald-500" : "text-destructive"}`} />
              )}
              <span className={item.positive ? "text-emerald-500" : "text-destructive"}>
                {item.change}
              </span>
              <span>{item.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
