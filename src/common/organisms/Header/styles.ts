import styled from "styled-components";
import _Logo from "@/common/atoms/Logo";
import _Nav from "@/common/molecules/Nav";
import _Scroll from "@/common/atoms/Scroll";
import { Main } from "@/styles/components/styles";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  padding: 2rem 3rem 0;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  color: ${({ theme }) => theme.color.violetBlue};
  transition: color 0.4s ease;
`;

export const Logo = styled(_Logo)`
  color: inherit;
`;

export const Scroll = styled(_Scroll)`
  color: inherit;
`;

export const Nav = styled(_Nav)``;

export const MainChildren = styled(Main)``;
