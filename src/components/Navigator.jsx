import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

import { DownIcon, RightIcon } from "./Icons/svg";
import navigationData from "../navigationData.json";

const renderLinks = (links) => {
  return links.map((item) => <LinkTree key={item?.url} item={item} />);
};

const LinkTree = ({ item }) => {
  const { group, category, title } = useParams();
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const urlPath = item?.url.split("/");
    if (urlPath[1] === group && urlPath[2] === undefined) {
      setCollapsed(false);
    } else if (
      urlPath[1] === group &&
      urlPath[2] === category &&
      urlPath[3] === undefined
    ) {
      setCollapsed(false);
    } else if (
      urlPath[1] === group &&
      urlPath[2] === category &&
      urlPath[3] === title
    ) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [group, category, title]);

  const renderIcon = () => {
    if (item?.children?.length === 0 || item?.children === undefined) {
      return;
    }
    return (
      <NavCollapsibleIcon onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <RightIcon /> : <DownIcon />}
      </NavCollapsibleIcon>
    );
  };

  return (
    <NavItem>
      <NavItemLink>
        {renderIcon()}
        <Link to={item?.url}>{item?.name}</Link>
      </NavItemLink>
      {!collapsed && item?.children && item?.children?.length > 0 && (
        <SubMenu>{renderLinks(item?.children)}</SubMenu>
      )}
    </NavItem>
  );
};

const Navigator = () => {
  return (
    <NavigatorContainer>
      <NavList>{renderLinks(navigationData.categories)}</NavList>
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
  grid-gap: 2px;
  line-height: 1;
  padding: 0.5em 0;
  width: 100%;
`;

const NavItemLink = styled.div`
  align-items: center;
  display: flex;
  grid-gap: 0 8px;
`;

const NavCollapsibleIcon = styled.span`
  cursor: pointer;
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
  padding-top: 0.5rem;
`;

export default Navigator;
