import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { moveHistory } from "@/lib/sample-data"
import type { MoveHistory } from "@/types"

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
    accessorKey: "operationType",
    header: "Operation",
    cell: ({ row }) => (
      <Badge
        variant={
          row.getValue("operationType") === "receipt"
            ? "default"
            : row.getValue("operationType") === "delivery"
            ? "secondary"
            : "outline"
        }
        className="capitalize"
      >
        {row.getValue("operationType")}
      </Badge>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className={row.getValue("quantity") < 0 ? "text-destructive" : ""}>
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "fromLocation",
    header: "From",
  },
  {
    accessorKey: "toLocation",
    header: "To",
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

export default function HistoryPage() {
  return (
    <DashboardLayout
      title="Move History"
      description="View inventory movement history."
    >
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Move History</h2>
          <p className="text-muted-foreground">
            Track all inventory movements, receipts, deliveries, and adjustments.
          </p>
        </div>

        <DataTable
          columns={columns}
          data={moveHistory}
          searchKey="productName"
          filterColumn="operationType"
          filterOptions={[
            { label: "Receipt", value: "receipt" },
            { label: "Delivery", value: "delivery" },
            { label: "Adjustment", value: "adjustment" },
            { label: "Transfer", value: "transfer" },
          ]}
        />
      </div>
    </DashboardLayout>
  )
}