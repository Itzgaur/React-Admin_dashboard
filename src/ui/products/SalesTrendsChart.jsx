import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

export default function SalesTrendChar() {
  return (
    <Card sx={{ borderRadius: "10px", padding: "1.5rem" }}>
      <CardContent>
        <Typography
          sx={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Sales Trends
        </Typography>
        <ResponsiveContainer height={300}>
          <LineChart data={salesData}>
            <CartesianGrid
              strokeDasharray={"3 3"}
              stroke="#374151"
            />
            <XAxis dataKey={"month"} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Line
              type={"monotone"}
              dataKey={"sales"}
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.2}
              animationDuration={2500}
              animationEasing="ease-in-out"
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
              labelStyle={{ color: "#E5E7EB" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
