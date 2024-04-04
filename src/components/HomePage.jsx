import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HomePage = ({ categories }) => {
  const renderCategories = () => {
    return categories.map((item) => (
      <NavItem key={item?.url}>
        <Link to={`${item?.url}`}>{item?.name}</Link>
      </NavItem>
    ));
  };

  return (
    <PageContainer>
      <h1>Welcome!</h1>
      <p>
        This is Nihongo Nook, a safe haven for practicing Japanese reading and
        listening.
      </p>
      <NavList>{renderCategories()}</NavList>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  p {
    margin-bottom: 1.5em;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  line-height: 1;
  padding: 0.5em 0;
  width: 100%;
`;

const Link = styled(NavLink)`
  color: skyblue;
  font-family: Helvetica;
  font-size: 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default HomePage;
