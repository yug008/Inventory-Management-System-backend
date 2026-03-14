// Product Types
export interface Product {
  id: string
  name: string
  sku: string
  category: string
  categoryId: string
  unitOfMeasure: string
  availableQuantity: number
  reorderLevel: number
  status: "active" | "inactive" | "discontinued"
  createdAt: string
  updatedAt: string
}

export interface ProductCategory {
  id: string
  name: string
  parentCategory: string | null
  parentCategoryId: string | null
  description: string
  createdAt: string
}

// Operations Types
export interface Receipt {
  id: string
  receiptId: string
  supplier: string
  supplierId: string
  warehouse: string
  warehouseId: string
  status: "pending" | "processing" | "completed" | "cancelled"
  date: string
  products: ReceiptProduct[]
  createdAt: string
}

export interface ReceiptProduct {
  productId: string
  productName: string
  quantity: number
}

export interface DeliveryOrder {
  id: string
  orderId: string
  destination: string
  warehouse: string
  warehouseId: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  date: string
  products: DeliveryProduct[]
  createdAt: string
}

export interface DeliveryProduct {
  productId: string
  productName: string
  quantity: number
}

export interface InventoryAdjustment {
  id: string
  productId: string
  productName: string
  warehouse: string
  warehouseId: string
  currentStock: number
  adjustedQuantity: number
  reason: string
  createdAt: string
}

export interface MoveHistory {
  id: string
  productId: string
  productName: string
  operationType: "receipt" | "delivery" | "adjustment" | "transfer"
  quantity: number
  fromLocation: string
  toLocation: string
  warehouse: string
  date: string
  reference: string
}

// Settings Types
export interface Warehouse {
  id: string
  name: string
  location: string
  manager: string
  managerId: string
  createdAt: string
}

export interface Location {
  id: string
  name: string
  warehouse: string
  warehouseId: string
  type: "storage" | "receiving" | "shipping" | "quarantine"
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "operator" | "viewer"
  avatar?: string
}

// Dashboard Types
export interface DashboardStats {
  totalProducts: number
  totalStock: number
  lowStockItems: number
  incomingShipments: number
  outgoingDeliveries: number
}

// Form Types
export interface ProductFormData {
  name: string
  sku: string
  categoryId: string
  unitOfMeasure: string
  reorderLevel: number
  status: "active" | "inactive" | "discontinued"
}

export interface CategoryFormData {
  name: string
  parentCategoryId: string | null
  description: string
}

export interface ReceiptFormData {
  supplierId: string
  warehouseId: string
  products: { productId: string; quantity: number }[]
}

export interface DeliveryFormData {
  destination: string
  warehouseId: string
  products: { productId: string; quantity: number }[]
}

export interface AdjustmentFormData {
  productId: string
  warehouseId: string
  adjustedQuantity: number
  reason: string
}

export interface WarehouseFormData {
  name: string
  location: string
  managerId: string
}

export interface LocationFormData {
  name: string
  warehouseId: string
  type: "storage" | "receiving" | "shipping" | "quarantine"
}

export interface ProfileFormData {
  name: string
  email: string
  currentPassword?: string
  newPassword?: string
  confirmPassword?: string
}
