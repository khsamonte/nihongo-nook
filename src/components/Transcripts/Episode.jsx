// Episode.jsx
import react from "react";
import { useParams } from "react-router-dom";

import MarkdownContent from "../MarkdownContent";

import { toTitleCase } from "../../utils/stringUtils";

const Episode = () => {
	const { animeTitle, season, episodeNumber } = useParams();
	const path = `/nihongo-nook/markdown/anime/${animeTitle}/${season}/${episodeNumber}.md`;
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

export default Episode;
