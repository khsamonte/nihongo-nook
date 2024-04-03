import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import navigationData from "../navigationData.json";

import { toKebabCase } from "../utils/stringUtils";

import bunnyGirlSenpaiS01E01Markdown from "../content/anime/bunny-girl-senpai/bunny-girl-senpai-s01e01.md";
import n3Choukai01Markdown from "../content/choukai/jlpt-n3/n3-choukai-01.md";

const Navigator = () => {
  const renderLinks = (navigationData) => {
    return Object.entries(navigationData).map(([key, value]) => {
      if (key === "url") {
        return null; // Skip URLs during key-value mapping
      }

      const content = (
        <NavItem key={key}>
          <Link to={value.url}>{key}</Link>
        </NavItem>
      );

      if (value.children && Object.keys(value.children).length > 0) {
        return (
          <li key={key}>
            {content}
            <SubMenu>{renderLinks(value.children)}</SubMenu>
          </li>
        );
      } else {
        return <li key={key}>{content}</li>;
      }
    });
  };

  return (
    <NavigatorContainer>
      <NavList>{renderLinks(navigationData)}</NavList>
      {/* <NavList>
        <NavItem>
          <Link to="/transcripts">Transcripts</Link>
          <SubMenu>
            <SubNavItem>
              <Link to="/transcripts/anime">Anime</Link>
              <SubMenu>
                <SubNavItem>
                  <Link to="/transcripts/anime/bunny-girl-senpai">
                    Bunny Girl Senpai
                  </Link>
                </SubNavItem>
              </SubMenu>
            </SubNavItem>
            <SubNavItem>
              <Link to="/transcripts/light-novels">Light Novels</Link>
            </SubNavItem>
            <SubNavItem>
              <Link to="/transcripts/youtube">YouTube</Link>
            </SubNavItem>
          </SubMenu>
        </NavItem>
        <NavItem>
          <Link to="/learning-notes">Learning Notes</Link>
        </NavItem>
        <NavItem>
          <Link to="/japanese-journal">Japanese Journal</Link>
        </NavItem>
      </NavList> */}
    </NavigatorContainer>
  );
};

const NavigatorContainer = styled.nav`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  /* border-top: 1px solid rgb(68, 70, 70); */
  line-height: 1;
  padding: 0.5em 0;
  width: 100%;
`;

const Link = styled(NavLink)`
  color: rgb(209, 203, 193);
  font-family: Helvetica;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: skyblue;
  }
`;

const SubMenu = styled(NavList)`
  padding-left: 1.5rem;
  /* padding-top: 0.5rem; */
`;

const SubNavItem = styled(NavItem)`
  border: 0;
`;

export default Navigator;
