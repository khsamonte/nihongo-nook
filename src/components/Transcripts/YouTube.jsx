import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const YouTube = ({ youtubeTranscripts }) => {
	return (
		<div>
			<h1>YouTube Transcripts</h1>
			<NavList>
				{youtubeTranscripts.map((title) => (
					<NavItem key={title?.name}>
						<Link to={title?.url}>{title?.name}</Link>
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

export default YouTube;
