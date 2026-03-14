import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { StockChart } from "@/components/dashboard/stock-chart"
import { CategoryChart } from "@/components/dashboard/category-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { TopProductsChart } from "@/components/dashboard/top-products-chart"
import { WarehouseDistribution } from "@/components/dashboard/warehouse-distribution"

export default function DashboardPage() {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Welcome back! Here's an overview of your inventory."
    >
      <div className="space-y-6">
        <SummaryCards />
        
        <div className="grid gap-6 lg:grid-cols-3">
          <StockChart />
          <CategoryChart />
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <TopProductsChart />
          <WarehouseDistribution />
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  )
}