import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { locations, warehouses } from "@/lib/sample-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LocationsPage() {
  const getWarehouseName = (warehouseId: string) => {
    const warehouse = warehouses.find(w => w.id === warehouseId)
    return warehouse?.name || 'Unknown'
  }

  return (
    <DashboardLayout
      title="Locations"
      description="Manage storage locations within warehouses."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <Card key={location.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {location.name}
                <Badge variant={location.type === 'storage' ? 'default' : 'secondary'}>
                  {location.type}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Warehouse:</strong> {getWarehouseName(location.warehouseId)}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Type:</strong> {location.type}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}