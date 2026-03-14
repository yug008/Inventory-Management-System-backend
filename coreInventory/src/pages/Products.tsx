import { useState, useEffect } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Plus, Pencil, Trash2 } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProductFormModal } from "@/components/forms/product-form-modal"
import { categories } from "@/lib/sample-data"
import type { Product } from "@/types"

export default function ProductsPage() {
  const [productList, setProductList] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:8080/api/products")
        if (!res.ok) throw new Error(await res.text())
        const data = await res.json()
        setProductList(data)
      } catch (err) {
        console.error("Failed to fetch products:", err)
      }
    }
    fetchProducts()
  }, [])

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "sku",
      header: "SKU",
      cell: ({ row }) => (
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          {row.getValue("sku")}
        </code>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      filterFn: (row, id, value) => value === "" || row.getValue(id) === value,
    },
    {
      accessorKey: "unitOfMeasure",
      header: "Unit",
      cell: ({ row }) => <span className="capitalize">{row.getValue("unitOfMeasure")}</span>,
    },
    {
      accessorKey: "availableQuantity",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4"
        >
          Available Qty
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const qty = row.getValue("availableQuantity") as number
        const reorderLevel = row.original.reorderLevel
        const isLow = qty > 0 && qty <= reorderLevel
        const isOut = qty === 0
        return (
          <span
            className={
              isOut ? "text-destructive font-medium" : isLow ? "text-amber-600 font-medium" : ""
            }
          >
            {qty.toLocaleString()}
          </span>
        )
      },
    },
    {
      accessorKey: "reorderLevel",
      header: "Reorder Level",
      cell: ({ row }) => (row.getValue("reorderLevel") as number).toLocaleString(),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge
            variant={status === "active" ? "default" : status === "inactive" ? "secondary" : "destructive"}
            className="capitalize"
          >
            {status}
          </Badge>
        )
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Product
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Product
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ]

  const categoryOptions = categories.map((cat) => ({ label: cat.name, value: cat.name }))

  return (
    <DashboardLayout
      title="Product List"
      description="Manage your product inventory and stock levels."
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Products</h2>
            <p className="text-muted-foreground">
              View and manage all products in your inventory.
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={productList} // <-- dynamic table
          searchKey="name"
          searchPlaceholder="Search products..."
          filterColumn="category"
          filterOptions={categoryOptions}
        />
      </div>
      <ProductFormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onProductAdded={(product) => setProductList((prev) => [...prev, product])}
      />
    </DashboardLayout>
  )
}