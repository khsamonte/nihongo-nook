import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LightNovels = ({ lightNovels }) => {
	return (
		<div>
			<h1>Light Novels</h1>
			<NavList>
				{lightNovels.map((lightNovel) => (
					<NavItem key={lightNovel?.name}>
						<Link to={lightNovel?.url}>{lightNovel?.name}</Link>
					</NavItem>
				))}
			</NavList>
		</div>
	);
};

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
	font-size: 14px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export default LightNovels;
