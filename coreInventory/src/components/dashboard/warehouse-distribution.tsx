import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { warehouses } from "@/lib/sample-data"

const warehouseData = [
  { name: "Main Warehouse", capacity: 85, items: 45230 },
  { name: "East Coast Hub", capacity: 62, items: 32450 },
  { name: "West Coast Center", capacity: 48, items: 28120 },
]

export function WarehouseDistribution() {
  const totalItems = warehouseData.reduce((sum, w) => sum + w.items, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Warehouse Distribution</CardTitle>
        <CardDescription>
          Stock distribution and capacity usage.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {warehouseData.map((warehouse) => (
          <div key={warehouse.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{warehouse.name}</span>
              <span className="text-muted-foreground">
                {warehouse.items.toLocaleString()} items
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={warehouse.capacity} className="h-2 flex-1" />
              <span className="text-xs text-muted-foreground w-10 text-right">
                {warehouse.capacity}%
              </span>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Items</span>
            <span className="font-semibold">{totalItems.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
