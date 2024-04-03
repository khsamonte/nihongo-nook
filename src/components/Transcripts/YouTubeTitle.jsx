import { useParams, Link } from "react-router-dom";
import { toTitleCase } from "../../utils/stringUtils";

const YouTubeTitle = () => {
	const { youtubeTitle } = useParams();
	const title = toTitleCase(youtubeTitle);
	const seasons = { "Season 1": ["Episode 1", "Episode 2"] };

	return (
		<div>
			<h2>{title}</h2>
			{Object.entries(seasons).map(([season, episodes]) => (
				<div key={season}>
					<h3>{season}</h3>
					<ul>
						{episodes.map((episode, index) => (
							<li key={episode}>
								<Link
									to={`/transcripts/anime/${youtubeTitle}/${season
										.toLowerCase()
										.replace(/\s+/g, "-")}/${index + 1}`}
								>
									{episode}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default YouTubeTitle;
