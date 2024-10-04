import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8B5CF6",
    href: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#EC4899",
    href: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10B981",
    href: "/sales",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#F59E0B",
    href: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3B82F6",
    href: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    href: "/settings",
  },
];

const OuterContainer = styled.div`
  width: 18rem;
  /* background-color: aqua; */
`;

const SideBarContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MenuButton = styled.button`
  border: none;
  max-width: fit-content;
  padding: 2rem;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const NavTitle = styled.span`
  margin-left: 1rem;
  font-weight: 500;
`;

const Linkk = styled(Link)`
  text-decoration: none;
  margin: 0.5rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #ced4da;
  }
`;

export default function Sidebar() {
  return (
    <OuterContainer>
      <SideBarContainer>
        <MenuButton>
          <Menu size={24} />
        </MenuButton>
        {SIDEBAR_ITEMS.map((item) => (
          <Linkk key={item.href} to={item.href}>
            <NavContainer>
              <item.icon
                size={20}
                style={{
                  color: item.color,
                  minWidth: "20px",
                }}
              />
              <NavTitle>{item.name}</NavTitle>
            </NavContainer>
          </Linkk>
        ))}
      </SideBarContainer>
    </OuterContainer>
  );
}
