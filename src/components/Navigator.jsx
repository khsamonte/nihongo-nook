import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import navigationData from "../navigationData.json";

const Navigator = () => {
	const renderLinks = (links) => {
		return links.map((item) => (
			<NavItem key={item?.url}>
				<Link to={item?.url}>{item?.name}</Link>
				{item?.children && item?.children?.length > 0 && (
					<SubMenu>{renderLinks(item?.children)}</SubMenu>
				)}
			</NavItem>
		));
	};

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
	padding-top: 0.5rem;
`;

export default Navigator;
