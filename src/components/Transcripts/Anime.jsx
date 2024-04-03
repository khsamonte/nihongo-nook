import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Anime = ({ animeTitles }) => {
	return (
		<div>
			<h1>Anime Titles</h1>
			<NavList>
				{animeTitles.map((animeTitle) => (
					<NavItem key={animeTitle?.name}>
						<Link to={animeTitle?.url}>{animeTitle?.name}</Link>
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

export default Anime;
