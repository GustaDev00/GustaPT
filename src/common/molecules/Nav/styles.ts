import styled from "styled-components";
import _Logo from "@/common/atoms/Logo";

export const NavContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  border: 0.2rem solid ${({ theme }) => theme.color.violetBlue};
  padding: 2rem 4rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled(_Logo)`
  font-size: ${({ theme }) => theme.size.size2_5rem};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.size.size2_5rem};
  color: ${({ theme }) => theme.color.violetBlue};
  gap: 2rem;
`;

export const Item = styled.li``;

export const ItemLg = styled.li``;

export const Link = styled.a`
  text-transform: uppercase;
`;
