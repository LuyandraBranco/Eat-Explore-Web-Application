import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const LogoContainer = styled.div`
  width: 50%;
  height: 6rem;
  display: flex;
  align-items: center;
`;

export const SpaceLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 0.4rem;
  > svg {
    line-height: 1.6;
    margin-left: 10%;
  }
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  color: #e5383b;
`;

export const Buttons = styled.div`
  width: 50%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonDownload = styled.button`
  width: 7.6875rem;
  height: 2.5rem;
  border-radius: 6px;
  background: #e5383b;
  color: #fff;
  border: none;
  margin-right: 2rem;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: var(--white);
  color: ${(props) => props.theme["gray-400"]};
  margin-right: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    color: var(--gray-600);
  }

  @media (max-width: 480px) {
    width: 3.5rem;
  }

`;

export const List = styled.ul`
  display: flex;
  text-transform: uppercase;
  list-style: none;

  @media screen and (max-width: 910px) {
    display: none;
  }
`;

export const ItemList = styled.li`
  margin-right: 1.8rem;
  font-weight: 500;
  line-height: 1.6;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: #e5383b;
    transition: 0.5s;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  //   color: ${(props) => props.theme["gray-700"]};

  //   &:hover {
  //     color: ${(props) => props.theme["orange-500"]};
  //     border-bottom: 3px solid ${(props) => props.theme["orange-500"]};
  //     padding-bottom: 0.7rem;
  //     transition: 0.5s;
  //   }

  //   &.active {
  //     color: ${(props) => props.theme["orange-500"]};
  //   }

  //   > svg {
  //     vertical-align: middle;
  //     margin-right: 0.5rem;
  //   }
`;
