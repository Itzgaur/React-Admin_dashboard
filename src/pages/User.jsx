import SummaryBoard from "../ui/common/SummaryBoard";
import Userstable from "../ui/users/UsersTable";
import { MainContainer } from "./Overview";
import { PageLayout } from "./Products";

export default function User() {
  return (
    <PageLayout>
      <SummaryBoard headerTitle={"Users"} />
      <MainContainer>
        <Userstable />
      </MainContainer>
    </PageLayout>
  );
}
