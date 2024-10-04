import { PageLayout } from "./Products";
import styled from "styled-components";
import SalesOverviewChart from "../ui/overview/SalesOverviewChart";
import CategoryDistributionChart from "../ui/overview/CategoryDistributionChart";
import ChannelSalesChart from "../ui/overview/ChannelSalesChart";
import SummaryBoard from "../ui/common/SummaryBoard";

export const MainContainer = styled.main`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
`;

// export const StatsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;
//   margin-left: 1rem;
//   margin-right: 1rem;
// `;

export const Chartscontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
  margin: 1rem 1rem;
  /* padding: 1rem; */
`;
const ChannelChatContainer = styled.div`
  grid-column: span 2;
  border-radius: 10px;
`;

export default function Overview() {
  return (
    <PageLayout>
      {/* <Header title="Overview" /> */}
      <SummaryBoard headerTitle={"Overview"} />
      <MainContainer>
        <Chartscontainer>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <ChannelChatContainer>
            <ChannelSalesChart />
          </ChannelChatContainer>
        </Chartscontainer>
      </MainContainer>
    </PageLayout>
  );
}
