import styled from "styled-components";
import StatCard from "./StatCard";
import {
  BarChart2,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default function Stats() {
  return (
    <StatsContainer>
      <StatCard
        name="Total Sales"
        icon={Zap}
        value="$12,345"
        color="#6366F1"
      />
      <StatCard
        name="New Users"
        icon={Users}
        value="1,234"
        color="#8B5CF6"
      />
      <StatCard
        name="Total Products"
        icon={ShoppingBag}
        value="567"
        color="#EC4899"
      />
      <StatCard
        name="Conversion Rate"
        icon={BarChart2}
        value="12.5%"
        color="#10B981"
      />
    </StatsContainer>
  );
}
