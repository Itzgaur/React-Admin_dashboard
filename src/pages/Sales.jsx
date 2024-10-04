import SummaryBoard from "../ui/common/SummaryBoard";
import CategoryDistributionChart from "../ui/overview/CategoryDistributionChart";
import DailySalesChart from "../ui/sales/DailySalesChart";
import SalesOverview from "../ui/sales/SalesOverview";
import { Chartscontainer, MainContainer } from "./Overview";
import { PageLayout } from "./Products";

export default function Sales() {
  return (
    <PageLayout>
      <SummaryBoard headerTitle={"Sales"} />
      <MainContainer>
        <SalesOverview />
        <Chartscontainer>
          <CategoryDistributionChart />
          <DailySalesChart />
        </Chartscontainer>
      </MainContainer>
    </PageLayout>
  );
}
