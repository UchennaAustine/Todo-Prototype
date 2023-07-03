import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <NavHold>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Nav>Home</Nav>
            </Link>
          </NavHold>

          <Logo>Uchenna <span>Austine</span></Logo>

          <Link to="/Input" style={{ textDecoration: "none", color: "black" }}>
            <Button>Add Task</Button>
          </Link>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div`
  padding: 10px 18px;
  background-color: white;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  font-weight: 500;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 25px;

  span{
    color: darkorange;
  }
`;

const Nav = styled.div`
  font-weight: 500;
`;

const NavHold = styled.div``;

const Main = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  background-color: black;
`;
