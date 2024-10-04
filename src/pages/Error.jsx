import styled from "styled-components";
import { PageLayout } from "./Products";

const Img = styled.img`
  width: 100%;
  height: 1066px;
`;

export default function Error() {
  return (
    <PageLayout>
      <Img src="./assests\Error.jpg" />
    </PageLayout>
  );
}
