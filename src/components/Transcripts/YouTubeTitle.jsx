import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";

const YouTubeTitle = ({ youtubeTranscripts }) => {
	const { youtubeTitle } = useParams();
	const youtubeVideo = youtubeTranscripts.find(
		(item) => item.url === `/transcripts/youtube/${youtubeTitle}`
	);

	const renderList = () => {
		const episodes = youtubeVideo?.children;

		if (episodes === null || episodes === undefined || episodes?.length === 0) {
			return <Text>No episodes.</Text>;
		} else {
			return (
				<NavList>
					{episodes?.map((episode) => (
						<NavItem key={episode?.name}>
							<Link to={episode?.url}>{episode?.name}</Link>
						</NavItem>
					))}
				</NavList>
			);
		}
	};

	return (
		<div>
			<h1>{youtubeVideo?.name}</h1>
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

export default YouTubeTitle;
