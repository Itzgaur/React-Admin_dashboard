import styled from "styled-components";
import { Chartscontainer, MainContainer } from "./Overview";

import SummaryBoard from "../ui/common/SummaryBoard";
import SalesTrendChar from "../ui/products/SalesTrendsChart";
import CategoryDistributionChart from "../ui/overview/CategoryDistributionChart";
import ProductTable from "../ui/products/ProductTable";

export const PageLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
`;

export default function Products() {
  return (
    <PageLayout>
      <SummaryBoard headerTitle="Products" />
      <MainContainer>
        <ProductTable />
        <Chartscontainer>
          <SalesTrendChar />
          <CategoryDistributionChart />
        </Chartscontainer>
      </MainContainer>
    </PageLayout>
  );
}
