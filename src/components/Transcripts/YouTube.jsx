import React from "react";
import { Link } from "react-router-dom";
import { toKebabCase } from "../../utils/stringUtils";

const titles = ["JLPT N3 Choukai"];

const YouTube = () => {
	return (
		<div>
			<h2>YouTube Transcripts</h2>
			<ul>
				{titles.map((title) => (
					<li key={title}>
						<Link to={`/transcripts/youtube/${toKebabCase(title)}`}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default YouTube;
