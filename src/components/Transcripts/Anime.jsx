// Anime.jsx
import { Link } from "react-router-dom";
import { toKebabCase } from "../../utils/stringUtils"; // Assuming you have this utility

const animeTitles = ["Bunny Girl Senpai"];

const Anime = () => {
	return (
		<div>
			<h2>Anime Titles</h2>
			<ul>
				{animeTitles.map((title) => (
					<li key={title}>
						<Link to={`/transcripts/anime/${toKebabCase(title)}`}>{title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Anime;
