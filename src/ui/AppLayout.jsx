import { Outlet } from "react-router-dom";
import Sidebar from "./common/Sidebar";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
`;

export default function AppLayout() {
  return (
    <>
      {/* <h1>THis is app layout</h1> */}
      <AppContainer className="layout">
        <Sidebar />
        <Outlet />
      </AppContainer>
    </>
  );
}
