import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { warehouses } from "@/lib/sample-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WarehousesPage() {
  return (
    <DashboardLayout
      title="Warehouses"
      description="Manage warehouse locations and settings."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {warehouses.map((warehouse) => (
          <Card key={warehouse.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {warehouse.name}
                <Badge variant="outline">Active</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Location:</strong> {warehouse.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Manager:</strong> {warehouse.manager}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Created:</strong> {new Date(warehouse.createdAt).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}