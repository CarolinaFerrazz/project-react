import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
  height: 50px;
  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

export const ContainerLinks = styled.nav`
  margin: 8px 20px;
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchIcon = styled.img`
  margin-right: 30px;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

export const ProfileIcon = styled.img`
  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

export const Row = styled.hr`
  border: 1px solid #fdc544;
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: fit-content;
  margin: 20px;
`;

export const Links = styled(Link)`
  padding: 8px 20px;
  margin: 8px;
  text-decoration: none;
  font-family: "Anton", sans-serif;
  font-style: bold;
  color: #000;
  opacity: 80%;

  &:hover {
    color: #fdc544;
    opacity: 100%;
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;
