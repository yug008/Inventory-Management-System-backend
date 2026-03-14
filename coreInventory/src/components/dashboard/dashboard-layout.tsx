import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { TopNav } from "@/components/dashboard/top-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export function DashboardLayout({ children, title, description }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <TopNav />
        <main className="flex-1 overflow-auto">
          <div className="container max-w-screen-2xl p-4 lg:p-6">
            <div className="mb-6">
              {/* <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
              {description && (
                <p className="text-muted-foreground">{description}</p>
              )} */}
            </div>
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
