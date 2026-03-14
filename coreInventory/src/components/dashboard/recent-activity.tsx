import { Package, RefreshCw, ShoppingCart, Truck, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
  {
    id: 1,
    type: "product_added",
    title: "New product added",
    description: "Wireless Charging Pad (WCP-15W-BK) added to Electronics",
    time: "2 minutes ago",
    icon: Package,
  },
  {
    id: 2,
    type: "stock_updated",
    title: "Stock updated",
    description: "LED Desk Lamp quantity increased from 45 to 89 units",
    time: "15 minutes ago",
    icon: RefreshCw,
  },
  {
    id: 3,
    type: "order_processed",
    title: "Order processed",
    description: "Order #ORD-2024-1847 shipped to customer",
    time: "32 minutes ago",
    icon: ShoppingCart,
  },
  {
    id: 4,
    type: "low_stock",
    title: "Low stock alert",
    description: "Mechanical Keyboard (MKB-RGB-BK) is running low",
    time: "1 hour ago",
    icon: AlertTriangle,
  },
  {
    id: 5,
    type: "supplier_delivery",
    title: "Supplier delivery",
    description: "Received shipment from TechVendor Co. (128 items)",
    time: "2 hours ago",
    icon: Truck,
  },
  {
    id: 6,
    type: "order_processed",
    title: "Order processed",
    description: "Order #ORD-2024-1846 fulfilled and shipped",
    time: "3 hours ago",
    icon: ShoppingCart,
  },
  {
    id: 7,
    type: "stock_updated",
    title: "Stock updated",
    description: "Yoga Mat Premium restocked with 156 units",
    time: "4 hours ago",
    icon: RefreshCw,
  },
  {
    id: 8,
    type: "product_added",
    title: "New product added",
    description: "Smart Watch Series X added to Electronics",
    time: "5 hours ago",
    icon: Package,
  },
]

function getActivityColor(type: string) {
  switch (type) {
    case "product_added":
      return "bg-primary text-primary-foreground"
    case "stock_updated":
      return "bg-success text-success-foreground"
    case "order_processed":
      return "bg-chart-2 text-white"
    case "low_stock":
      return "bg-warning text-warning-foreground"
    case "supplier_delivery":
      return "bg-chart-3 text-white"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest updates and actions in your inventory.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[340px] px-6">
          <div className="space-y-4 pb-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${getActivityColor(activity.type)}`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
