import React from "react";
import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";

const TranscriptCategory = ({ items }) => {
	const { group, category } = useParams();

	let data;

	if (group === "transcripts") {
		data = items[0]?.children?.find((item) => {
			return item.url === `/transcripts/${category}`;
		});
	} else if (group === "structure") {
		data = items[1]?.children?.find((item) => {
			return item.url === `/structure/${category}`;
		});
	}

	const renderList = () => {
		const titles = data?.children;

		if (titles === null || titles === undefined || titles?.length === 0) {
			return <Text>No titles.</Text>;
		} else {
			return (
				<NavList>
					{titles.map((title) => (
						<NavItem key={title?.name}>
							<Link to={title?.url}>{title?.name}</Link>
						</NavItem>
					))}
				</NavList>
			);
		}
	};

	return (
		<div>
			<h1>{data?.name}</h1>
			{renderList()}
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
	font-size: 1em;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Text = styled.div`
	font-family: Helvetica;
	font-size: 1em;
	padding: 0.5em 0;
	text-decoration: none;
`;

export default TranscriptCategory;
