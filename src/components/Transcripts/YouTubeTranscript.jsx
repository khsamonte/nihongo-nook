// Episode.jsx
import { useParams } from "react-router-dom";

import MarkdownContent from "../MarkdownContent";

import { toTitleCase } from "../../utils/stringUtils";

const YouTubeTranscript = () => {
	const basePath = process.env.PUBLIC_URL || "";

	const { youtubeTitle, episodeNumber } = useParams();
	const path = `${basePath}/markdown/youtube/${youtubeTitle}/${episodeNumber}.md`;
	return (
		<>
			<h1>
				{toTitleCase(youtubeTitle)} - Episode {episodeNumber}
			</h1>
			<MarkdownContent markdownFile={path} />
		</>
	);
};

export default YouTubeTranscript;
