import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import bunnyGirlSenpaiS01E01Markdown from "../content/anime/bunny-girl-senpai/bunny-girl-senpai-s01e01.md";
import n3Choukai01Markdown from "../content/choukai/jlpt-n3/n3-choukai-01.md";

const Navigator = ({ selectMarkdown }) => {
	return (
		<NavigatorContainer>
			<NavList>
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
								<SubNavItem>
									<Link to="/transcripts/anime/white-album-2">
										White Album 2
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
			</NavList>
			{/* <ul>
				<li onClick={() => selectMarkdown(bunnyGirlSenpaiS01E01Markdown)}>
					Bunny Girl Senpai - Episode 01
				</li>
				<li onClick={() => selectMarkdown(n3Choukai01Markdown)}>
					JLPT N3 - Choukai 01
				</li>
			</ul> */}
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
	border-top: 1px solid rgb(68, 70, 70);
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

const SubMenu = styled.div`
	padding-left: 1.5rem;
	padding-top: 0.5rem;
`;

const SubNavItem = styled(NavItem)`
	border: 0;
`;

export default Navigator;
