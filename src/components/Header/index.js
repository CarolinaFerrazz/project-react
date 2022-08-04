import React from "react";
import {
  ContainerLinks,
  Logo,
  ProfileIcon,
  SearchIcon,
  Row,
  ContainerMenu,
  Links,
} from "./styles";
// import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import potato from "../../assets/beautifulpotato.png";

function Header() {
  return (
    <>
      <header>
        <ContainerLinks>
          <a title="Home Page" href="/">
            <Logo src={potato} alt="logo" />
          </a>
          <ContainerMenu>
            <Links to="/myBooks">My Books</Links>
            <Links to="/myBooks">Logout</Links>
          </ContainerMenu>
          <div>
            <a title="Search" href="/search">
              <SearchIcon src={search} alt="Search icon" />
            </a>
            <a title="Your Profile" href="/">
              <ProfileIcon src={profile} alt="Profile icon" />
            </a>
          </div>
        </ContainerLinks>
      </header>
      <Row />
    </>
  );
}

export default Header;
