// AnimeTitle.jsx
import { useParams, Link } from "react-router-dom";
import { toTitleCase } from "../../utils/stringUtils"; // Assuming you have this utility

const AnimeTitle = () => {
	const { animeTitle } = useParams();
	const title = toTitleCase(animeTitle);
	// Simulated data, replace with actual fetch/request
	const seasons = { "Season 1": ["Episode 1", "Episode 2"] }; // Example structure

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
									to={`/transcripts/anime/${animeTitle}/${season
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

export default AnimeTitle;
