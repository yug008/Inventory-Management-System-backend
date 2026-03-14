import type {
  Product,
  ProductCategory,
  Receipt,
  DeliveryOrder,
  MoveHistory,
  Warehouse,
  Location,
  User,
  DashboardStats,
} from "@/types"

export const currentUser: User = {
  id: "user-1",
  name: "John Anderson",
  email: "john.anderson@company.com",
  role: "admin",
  avatar: undefined,
}

export const dashboardStats: DashboardStats = {
  totalProducts: 2847,
  totalStock: 156432,
  lowStockItems: 23,
  incomingShipments: 12,
  outgoingDeliveries: 8,
}

export const categories: ProductCategory[] = [
  { id: "cat-1", name: "Electronics", parentCategory: null, parentCategoryId: null, description: "Electronic devices and components", createdAt: "2024-01-15" },
  { id: "cat-2", name: "Furniture", parentCategory: null, parentCategoryId: null, description: "Office and home furniture", createdAt: "2024-01-15" },
  { id: "cat-3", name: "Office Supplies", parentCategory: null, parentCategoryId: null, description: "General office supplies", createdAt: "2024-01-15" },
  { id: "cat-4", name: "Computers", parentCategory: "Electronics", parentCategoryId: "cat-1", description: "Desktop and laptop computers", createdAt: "2024-02-01" },
  { id: "cat-5", name: "Accessories", parentCategory: "Electronics", parentCategoryId: "cat-1", description: "Electronic accessories", createdAt: "2024-02-01" },
  { id: "cat-6", name: "Chairs", parentCategory: "Furniture", parentCategoryId: "cat-2", description: "Office and ergonomic chairs", createdAt: "2024-02-10" },
  { id: "cat-7", name: "Desks", parentCategory: "Furniture", parentCategoryId: "cat-2", description: "Work desks and tables", createdAt: "2024-02-10" },
]

export const products: Product[] = [
  { id: "prod-1", name: "MacBook Pro 16\"", sku: "MBP-16-2024", category: "Computers", categoryId: "cat-4", unitOfMeasure: "unit", availableQuantity: 45, reorderLevel: 20, status: "active", createdAt: "2024-01-20", updatedAt: "2024-03-10" },
  { id: "prod-2", name: "Dell UltraSharp 27\" Monitor", sku: "DEL-U27-4K", category: "Electronics", categoryId: "cat-1", unitOfMeasure: "unit", availableQuantity: 78, reorderLevel: 30, status: "active", createdAt: "2024-01-22", updatedAt: "2024-03-08" },
  { id: "prod-3", name: "Herman Miller Aeron Chair", sku: "HM-AERON-BLK", category: "Chairs", categoryId: "cat-6", unitOfMeasure: "unit", availableQuantity: 12, reorderLevel: 15, status: "active", createdAt: "2024-02-01", updatedAt: "2024-03-05" },
  { id: "prod-4", name: "Logitech MX Master 3S", sku: "LOG-MX3S-BLK", category: "Accessories", categoryId: "cat-5", unitOfMeasure: "unit", availableQuantity: 156, reorderLevel: 50, status: "active", createdAt: "2024-02-05", updatedAt: "2024-03-12" },
  { id: "prod-5", name: "Standing Desk Pro", sku: "DESK-STD-PRO", category: "Desks", categoryId: "cat-7", unitOfMeasure: "unit", availableQuantity: 8, reorderLevel: 10, status: "active", createdAt: "2024-02-10", updatedAt: "2024-03-01" },
  { id: "prod-6", name: "Wireless Keyboard K380", sku: "LOG-K380-WHT", category: "Accessories", categoryId: "cat-5", unitOfMeasure: "unit", availableQuantity: 234, reorderLevel: 100, status: "active", createdAt: "2024-02-12", updatedAt: "2024-03-14" },
  { id: "prod-7", name: "USB-C Hub Pro", sku: "HUB-USBC-7P", category: "Accessories", categoryId: "cat-5", unitOfMeasure: "unit", availableQuantity: 0, reorderLevel: 25, status: "active", createdAt: "2024-02-15", updatedAt: "2024-03-10" },
  { id: "prod-8", name: "A4 Copy Paper (500 sheets)", sku: "PAPER-A4-500", category: "Office Supplies", categoryId: "cat-3", unitOfMeasure: "pack", availableQuantity: 1250, reorderLevel: 200, status: "active", createdAt: "2024-01-15", updatedAt: "2024-03-13" },
  { id: "prod-9", name: "ThinkPad X1 Carbon", sku: "LEN-X1C-G11", category: "Computers", categoryId: "cat-4", unitOfMeasure: "unit", availableQuantity: 23, reorderLevel: 15, status: "active", createdAt: "2024-02-20", updatedAt: "2024-03-11" },
  { id: "prod-10", name: "Ergonomic Mouse Pad XL", sku: "PAD-ERGO-XL", category: "Accessories", categoryId: "cat-5", unitOfMeasure: "unit", availableQuantity: 89, reorderLevel: 30, status: "inactive", createdAt: "2024-02-25", updatedAt: "2024-03-08" },
]

export const warehouses: Warehouse[] = [
  { id: "wh-1", name: "Main Warehouse", location: "123 Industrial Ave, Chicago, IL", manager: "Sarah Johnson", managerId: "user-2", createdAt: "2024-01-01" },
  { id: "wh-2", name: "East Coast Hub", location: "456 Logistics Blvd, Newark, NJ", manager: "Michael Chen", managerId: "user-3", createdAt: "2024-01-15" },
  { id: "wh-3", name: "West Coast Center", location: "789 Distribution Way, Los Angeles, CA", manager: "Emily Davis", managerId: "user-4", createdAt: "2024-02-01" },
]

export const locations: Location[] = [
  { id: "loc-1", name: "Zone A - Rack 1", warehouse: "Main Warehouse", warehouseId: "wh-1", type: "storage" },
  { id: "loc-2", name: "Zone A - Rack 2", warehouse: "Main Warehouse", warehouseId: "wh-1", type: "storage" },
  { id: "loc-3", name: "Receiving Dock 1", warehouse: "Main Warehouse", warehouseId: "wh-1", type: "receiving" },
  { id: "loc-4", name: "Shipping Dock 1", warehouse: "Main Warehouse", warehouseId: "wh-1", type: "shipping" },
  { id: "loc-5", name: "Zone B - Shelf 1", warehouse: "East Coast Hub", warehouseId: "wh-2", type: "storage" },
  { id: "loc-6", name: "Quarantine Area", warehouse: "East Coast Hub", warehouseId: "wh-2", type: "quarantine" },
]

export const receipts: Receipt[] = [
  { id: "rec-1", receiptId: "REC-2024-001", supplier: "Apple Inc.", supplierId: "sup-1", warehouse: "Main Warehouse", warehouseId: "wh-1", status: "completed", date: "2024-03-10", products: [{ productId: "prod-1", productName: "MacBook Pro 16\"", quantity: 20 }], createdAt: "2024-03-10" },
  { id: "rec-2", receiptId: "REC-2024-002", supplier: "Dell Technologies", supplierId: "sup-2", warehouse: "East Coast Hub", warehouseId: "wh-2", status: "processing", date: "2024-03-12", products: [{ productId: "prod-2", productName: "Dell UltraSharp 27\" Monitor", quantity: 50 }], createdAt: "2024-03-12" },
  { id: "rec-3", receiptId: "REC-2024-003", supplier: "Herman Miller", supplierId: "sup-3", warehouse: "Main Warehouse", warehouseId: "wh-1", status: "pending", date: "2024-03-14", products: [{ productId: "prod-3", productName: "Herman Miller Aeron Chair", quantity: 15 }], createdAt: "2024-03-14" },
  { id: "rec-4", receiptId: "REC-2024-004", supplier: "Logitech", supplierId: "sup-4", warehouse: "West Coast Center", warehouseId: "wh-3", status: "completed", date: "2024-03-08", products: [{ productId: "prod-4", productName: "Logitech MX Master 3S", quantity: 100 }, { productId: "prod-6", productName: "Wireless Keyboard K380", quantity: 150 }], createdAt: "2024-03-08" },
]

export const deliveryOrders: DeliveryOrder[] = [
  { id: "del-1", orderId: "DEL-2024-001", destination: "TechCorp HQ, San Francisco", warehouse: "West Coast Center", warehouseId: "wh-3", status: "delivered", date: "2024-03-09", products: [{ productId: "prod-1", productName: "MacBook Pro 16\"", quantity: 5 }], createdAt: "2024-03-09" },
  { id: "del-2", orderId: "DEL-2024-002", destination: "StartupHub, New York", warehouse: "East Coast Hub", warehouseId: "wh-2", status: "shipped", date: "2024-03-11", products: [{ productId: "prod-2", productName: "Dell UltraSharp 27\" Monitor", quantity: 10 }], createdAt: "2024-03-11" },
  { id: "del-3", orderId: "DEL-2024-003", destination: "Enterprise Solutions, Chicago", warehouse: "Main Warehouse", warehouseId: "wh-1", status: "processing", date: "2024-03-13", products: [{ productId: "prod-3", productName: "Herman Miller Aeron Chair", quantity: 8 }], createdAt: "2024-03-13" },
  { id: "del-4", orderId: "DEL-2024-004", destination: "Digital Agency, Austin", warehouse: "Main Warehouse", warehouseId: "wh-1", status: "pending", date: "2024-03-14", products: [{ productId: "prod-9", productName: "ThinkPad X1 Carbon", quantity: 12 }], createdAt: "2024-03-14" },
]

export const moveHistory: MoveHistory[] = [
  { id: "move-1", productId: "prod-1", productName: "MacBook Pro 16\"", operationType: "receipt", quantity: 20, fromLocation: "External", toLocation: "Zone A - Rack 1", warehouse: "Main Warehouse", date: "2024-03-10", reference: "REC-2024-001" },
  { id: "move-2", productId: "prod-1", productName: "MacBook Pro 16\"", operationType: "delivery", quantity: 5, fromLocation: "Zone A - Rack 1", toLocation: "TechCorp HQ", warehouse: "West Coast Center", date: "2024-03-09", reference: "DEL-2024-001" },
  { id: "move-3", productId: "prod-4", productName: "Logitech MX Master 3S", operationType: "receipt", quantity: 100, fromLocation: "External", toLocation: "Zone B - Shelf 1", warehouse: "East Coast Hub", date: "2024-03-08", reference: "REC-2024-004" },
  { id: "move-4", productId: "prod-7", productName: "USB-C Hub Pro", operationType: "adjustment", quantity: -25, fromLocation: "Zone A - Rack 2", toLocation: "Quarantine Area", warehouse: "Main Warehouse", date: "2024-03-07", reference: "ADJ-2024-001" },
  { id: "move-5", productId: "prod-2", productName: "Dell UltraSharp 27\" Monitor", operationType: "transfer", quantity: 15, fromLocation: "Receiving Dock 1", toLocation: "Zone A - Rack 1", warehouse: "Main Warehouse", date: "2024-03-06", reference: "TRF-2024-001" },
  { id: "move-6", productId: "prod-3", productName: "Herman Miller Aeron Chair", operationType: "delivery", quantity: 8, fromLocation: "Zone A - Rack 2", toLocation: "Enterprise Solutions", warehouse: "Main Warehouse", date: "2024-03-13", reference: "DEL-2024-003" },
]

export const suppliers = [
  { id: "sup-1", name: "Apple Inc." },
  { id: "sup-2", name: "Dell Technologies" },
  { id: "sup-3", name: "Herman Miller" },
  { id: "sup-4", name: "Logitech" },
  { id: "sup-5", name: "Lenovo" },
  { id: "sup-6", name: "Office Depot" },
]

export const unitOfMeasures = [
  { value: "unit", label: "Unit" },
  { value: "pack", label: "Pack" },
  { value: "box", label: "Box" },
  { value: "kg", label: "Kilogram" },
  { value: "liter", label: "Liter" },
  { value: "meter", label: "Meter" },
]
