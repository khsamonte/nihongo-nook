import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Transcripts = ({ transcripts }) => {
	const renderTranscripts = () => {
		return transcripts.map((item) => (
			<NavItem key={item?.url}>
				<Link to={`${item?.url}`}>{item?.name}</Link>
			</NavItem>
		));
	};

	return (
		<div>
			<h1>Transcripts</h1>
			<NavList>{renderTranscripts()}</NavList>
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

export default Transcripts;
