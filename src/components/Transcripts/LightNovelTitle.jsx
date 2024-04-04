import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";

const LightNovel = ({ lightNovelTitles }) => {
	const { lightNovelTitle } = useParams();
	const lightNovel = lightNovelTitles.find(
		(item) => item.url === `/transcripts/light-novels/${lightNovelTitle}`
	);

	const renderList = () => {
		const chapters = lightNovel?.children;

		if (chapters === null || chapters === undefined || chapters?.length === 0) {
			return <Text>No chapters.</Text>;
		} else {
			return (
				<NavList>
					{chapters?.map((chapter) => (
						<NavItem key={chapter?.name}>
							<Link to={chapter?.url}>{chapter?.name}</Link>
						</NavItem>
					))}
				</NavList>
			);
		}
	};

	return (
		<div>
			<h1>{lightNovel?.name}</h1>
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

export default LightNovel;
