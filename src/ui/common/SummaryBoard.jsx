import styled from "styled-components";
import Header from "./Header";
import Stats from "./Stats";

const SummaryContainer = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
`;

// eslint-disable-next-line react/prop-types
export default function SummaryBoard({ headerTitle }) {
  return (
    <div>
      <Header title={headerTitle} />
      <SummaryContainer>
        <Stats />
      </SummaryContainer>
    </div>
  );
}
