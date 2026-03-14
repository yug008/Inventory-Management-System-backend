import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const stockData = [
  { month: "Jan", electronics: 1200, furniture: 450, accessories: 890, fitness: 320 },
  { month: "Feb", electronics: 1350, furniture: 480, accessories: 920, fitness: 340 },
  { month: "Mar", electronics: 1180, furniture: 520, accessories: 850, fitness: 390 },
  { month: "Apr", electronics: 1420, furniture: 490, accessories: 980, fitness: 420 },
  { month: "May", electronics: 1580, furniture: 540, accessories: 1050, fitness: 480 },
  { month: "Jun", electronics: 1650, furniture: 580, accessories: 1120, fitness: 510 },
  { month: "Jul", electronics: 1480, furniture: 620, accessories: 1080, fitness: 490 },
  { month: "Aug", electronics: 1720, furniture: 650, accessories: 1200, fitness: 550 },
  { month: "Sep", electronics: 1890, furniture: 680, accessories: 1280, fitness: 580 },
  { month: "Oct", electronics: 2050, furniture: 720, accessories: 1350, fitness: 620 },
  { month: "Nov", electronics: 2280, furniture: 780, accessories: 1450, fitness: 680 },
  { month: "Dec", electronics: 2450, furniture: 820, accessories: 1580, fitness: 720 },
]

export function StockChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Stock Levels Over Time</CardTitle>
        <CardDescription>
          Monthly inventory levels by category for the current year.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={stockData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorElectronics" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.546 0.245 262.881)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.546 0.245 262.881)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorFurniture" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.6 0.118 184.704)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.6 0.118 184.704)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                className="text-muted-foreground"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                className="text-muted-foreground"
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                        <p className="text-sm font-medium mb-2">{label}</p>
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-muted-foreground capitalize">
                              {entry.dataKey}:
                            </span>
                            <span className="font-medium">
                              {(entry.value as number).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="electronics"
                stroke="oklch(0.546 0.245 262.881)"
                strokeWidth={2}
                fill="url(#colorElectronics)"
              />
              <Area
                type="monotone"
                dataKey="furniture"
                stroke="oklch(0.6 0.118 184.704)"
                strokeWidth={2}
                fill="url(#colorFurniture)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "oklch(0.546 0.245 262.881)" }} />
            <span className="text-sm text-muted-foreground">Electronics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "oklch(0.6 0.118 184.704)" }} />
            <span className="text-sm text-muted-foreground">Furniture</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
