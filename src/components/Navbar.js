import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  position: absolute;
  left: 100px;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 30px;
  text-decoration: none;
  font-size: 28px;
  z-index: 999;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Game</NavLink>
    </Wrapper>
  );
};

export default Navbar;
