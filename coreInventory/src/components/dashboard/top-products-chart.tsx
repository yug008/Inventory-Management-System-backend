import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const topProductsData = [
  { name: "MacBook Pro", movements: 156 },
  { name: "Dell Monitor", movements: 134 },
  { name: "MX Master 3S", movements: 128 },
  { name: "K380 Keyboard", movements: 112 },
  { name: "ThinkPad X1", movements: 98 },
]

export function TopProductsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Moving Products</CardTitle>
        <CardDescription>
          Products with highest stock movements this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topProductsData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                width={100}
                className="text-muted-foreground"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                        <p className="text-sm font-medium">{payload[0].payload.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {payload[0].value} movements
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar 
                dataKey="movements" 
                fill="oklch(0.546 0.245 262.881)" 
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
