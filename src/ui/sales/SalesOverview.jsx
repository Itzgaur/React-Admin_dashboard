import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import styled from "styled-components";

const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];
const SalesOverviewContainer = styled.div`
  padding: 1rem;
`;

export default function SalesOverview() {
  return (
    <SalesOverviewContainer>
      <Card
        sx={{ borderRadius: "10px", padding: "1.5rem" }}
      >
        <CardContent>
          <Typography
            sx={{
              marginBottom: "1rem",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            Sales Overview
          </Typography>
          <ResponsiveContainer height={400}>
            <AreaChart data={monthlySalesData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
              />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </SalesOverviewContainer>
  );
}
