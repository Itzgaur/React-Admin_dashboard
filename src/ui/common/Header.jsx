/* eslint-disable react/prop-types */
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 1rem;
  color: #343a40;
`;

export default function Header({ title }) {
  return (
    <AppHeader>
      <h1>{title}</h1>
    </AppHeader>
  );
}
