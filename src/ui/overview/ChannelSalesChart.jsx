import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = [
  "#6366F1",
  "#8B5CF6",
  "#EC4899",
  "#10B981",
  "#F59E0B",
];

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

export default function ChannelSalesChart() {
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
          Category Distribution
        </Typography>
        <ResponsiveContainer height={500}>
          <BarChart width={400} data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />

            <Bar
              dataKey={"value"}
              fill="#8884d8"
              animationDuration={2500}
            >
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
