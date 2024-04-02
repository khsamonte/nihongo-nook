import React, { useState } from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Transcripts from "./components/Transcripts/index";
import Anime from "./components/Transcripts/Anime";
import AnimeTitle from "./components/Transcripts/AnimeTitle";
import Episode from "./components/Transcripts/Episode";
// import LightNovels from "./components/Transcripts/LightNovels";
// import YouTube from "./components/Transcripts/YouTube";

import MarkdownContent from "./components/MarkdownContent";
import Navigator from "./components/Navigator";

function App() {
	const [currentMarkdown, setCurrentMarkdown] = useState();

	// Function to change the Markdown content
	const selectMarkdown = (markdown) => {
		setCurrentMarkdown(markdown);
	};

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<SiteContent>
				<MainColumn>
					<Routes>
						<Route path="/transcripts" element={<Transcripts />} />
						<Route path="/transcripts/anime" element={<Anime />} />
						<Route
							path="/transcripts/anime/:animeTitle"
							element={<AnimeTitle />}
						/>
						<Route
							path="/transcripts/anime/:animeTitle/:season/:episodeNumber"
							element={<Episode />}
						/>
						{/* Include routes for other categories similarly */}

						{/* <Route path="/learning-notes" element={<LearningNotes />}></Route>

					<Route path="/japanese-journal" element={<JapaneseJournal />}></Route> */}
					</Routes>
				</MainColumn>
				{/* <MarkdownContent markdownFile={currentMarkdown} /> */}
				<Navigator selectMarkdown={selectMarkdown} />
			</SiteContent>
		</Router>
	);
}

const SiteContent = styled.div`
	display: flex;
	font-size: 16px;
	grid-gap: 30px;
	margin: 0 auto;
	max-width: 1366px;
	padding: 5.5em 3em 0;

	h1 {
		font-family: "NotoSansJP-Light";
		font-size: 1.625em;
		font-weight: 300;
		padding-bottom: 1em;
	}

	h2 {
		font-family: "NotoSansJP-Light";
		font-size: 1.625em;
		font-weight: 300;
		margin: 0 0 0.75em;
	}

	h3 {
		font-family: "NotoSansJP-Light";
		font-size: 1.375em;
		font-weight: 300;
		margin: 0 0 0.75em;
	}

	p {
		font-family: "NotoSansJP-Light";
		font-size: 1.25em;
		font-weight: 300;
		margin: 0 0 1.5em;
		line-height: 1.5;
		list-style: none;
	}

	hr {
		border: none;
		border-top: 1px solid rgb(63, 65, 65);
		margin: 0 0 1.5em;
	}

	&.character-name {
		color: orange;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}

	@media screen and (max-width: 480px) {
		font-size: 14px;
	}
`;

const MainColumn = styled.div`
	width: 65%;

	p,
	ul {
		font-family: "NotoSansJP-Light";
		font-size: 14px
		font-weight: 300;
		margin: 0 0 1.5em;
		line-height: 1.5;
    list-style: none;
	}

  a {
	  color: rgb(209, 203, 193);

    &:hover {
      color: skyblue;
    }
  }

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export default App;
