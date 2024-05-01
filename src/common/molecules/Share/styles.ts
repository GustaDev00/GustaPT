import styled from "styled-components";

export const ShareContainer = styled.div``;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.size8rem};
  color: ${({ theme }) => theme.color.violetBlue};
  text-transform: uppercase;
  text-align: right;
`;

export const Links = styled.div``;

export const List = styled.ul``;

export const Item = styled.li`
  text-align: right;
  font-size: ${({ theme }) => theme.size.size4_8rem};
  color: ${({ theme }) => theme.color.violetBlue};
  opacity: 0.75;
  text-transform: uppercase;
  margin: 2rem 0;
`;

export const Link = styled.a``;
