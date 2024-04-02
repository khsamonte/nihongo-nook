import React from "react";
import { Link } from "react-router-dom";

const Transcripts = () => (
	<div>
		<h2>Transcripts</h2>
		<ul>
			<li>
				<Link to="/transcripts/anime">Anime</Link>
			</li>
			<li>
				<Link to="/transcripts/light-novels">Light Novels</Link>
			</li>
			<li>
				<Link to="/transcripts/youtube">YouTube</Link>
			</li>
		</ul>
	</div>
);

export default Transcripts;
