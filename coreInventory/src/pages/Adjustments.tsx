import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { moveHistory } from "@/lib/sample-data"
import type { MoveHistory } from "@/types"

// Filter to only adjustments
const adjustments = moveHistory.filter(item => item.operationType === "adjustment")

const columns: ColumnDef<MoveHistory>[] = [
  {
    accessorKey: "productName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4"
      >
        Product
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue("productName")}</div>,
  },
  {
    accessorKey: "quantity",
    header: "Adjustment",
    cell: ({ row }) => (
      <div className={row.getValue("quantity") < 0 ? "text-destructive" : "text-green-600"}>
        {row.getValue("quantity") > 0 ? "+" : ""}{row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "fromLocation",
    header: "From Location",
  },
  {
    accessorKey: "toLocation",
    header: "To Location",
  },
  {
    accessorKey: "warehouse",
    header: "Warehouse",
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>{new Date(row.getValue("date")).toLocaleDateString()}</div>
    ),
  },
  {
    accessorKey: "reference",
    header: "Reference",
  },
]

export default function AdjustmentsPage() {
  return (
    <DashboardLayout
      title="Inventory Adjustments"
      description="Manage inventory adjustments and corrections."
    >
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Inventory Adjustments</h2>
          <p className="text-muted-foreground">
            View and manage inventory quantity adjustments and corrections.
          </p>
        </div>

        <DataTable
          columns={columns}
          data={adjustments}
          searchKey="productName"
        />
      </div>
    </DashboardLayout>
  )
}