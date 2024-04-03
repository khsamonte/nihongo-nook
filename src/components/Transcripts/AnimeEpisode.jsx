// Episode.jsx
import { useParams } from "react-router-dom";

import MarkdownContent from "../MarkdownContent";

import { toTitleCase } from "../../utils/stringUtils";

const AnimeEpisode = () => {
	const basePath = process.env.PUBLIC_URL || "";

	const { animeTitle, season, episodeNumber } = useParams();
	const path = `${basePath}/markdown/anime/${animeTitle}/${season}/${episodeNumber}.md`;
	return (
		<>
			<h1>
				{toTitleCase(animeTitle)} - {toTitleCase(season)} - Episode{" "}
				{episodeNumber}
			</h1>
			<MarkdownContent markdownFile={path} />
		</>
	);
};

export default AnimeEpisode;