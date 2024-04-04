import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";

const Title = ({ categories }) => {
	const { category, title } = useParams();
	const titles = categories?.find((item) => {
		return item.url === `/transcripts/${category}`;
	});

	const transcripts = titles?.children?.find((item) => {
		return item.url === `/transcripts/${category}/${title}`;
	});

	const renderList = () => {
		const data = transcripts?.children;
		if (data === null || data === undefined || data?.length === 0) {
			return <Text>No transcripts.</Text>;
		} else {
			return (
				<NavList>
					{data?.map((transcript) => (
						<NavItem key={transcript?.name}>
							<Link to={transcript?.url}>{transcript?.name}</Link>
						</NavItem>
					))}
				</NavList>
			);
		}
	};

	return (
		<div>
			<h1>{transcripts?.name}</h1>
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
	font-size: 14px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Text = styled.div`
	font-family: Helvetica;
	font-size: 14px;
	padding: 0.5em 0;
	text-decoration: none;
`;

export default Title;
