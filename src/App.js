import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Transcripts from "./components/Transcripts/index";
import TranscriptCategory from "./components/Transcripts/TranscriptCategory";
import Title from "./components/Transcripts/Title";
import Transcript from "./components/Transcripts/Transcript";

// import Anime from "./components/Transcripts/Anime";
// import AnimeTitle from "./components/Transcripts/AnimeTitle";
// import AnimeEpisode from "./components/Transcripts/AnimeEpisode";

// import LightNovels from "./components/Transcripts/LightNovels";
// import LightNovelTitle from "./components/Transcripts/LightNovelTitle";
// import LightNovelChapter from "./components/Transcripts/LightNovelChapter";

// import YouTube from "./components/Transcripts/YouTube";
// import YouTubeTitle from "./components/Transcripts/YouTubeTitle";
// import YouTubeTranscript from "./components/Transcripts/YouTubeTranscript";

import Navigator from "./components/Navigator";

import navigationData from "./navigationData.json";

const transcripts = navigationData?.categories[0].children;
const transcriptCategories = transcripts;
const titles = transcriptCategories?.children;
const learningNotes = navigationData?.categories[1].children;

const animeTitles = transcripts[0].children;
const lightNovels = transcripts[1].children;
const youtubeTranscripts = transcripts[2].children;

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<SiteContent>
				<MainColumn>
					<Routes>
						<Route
							path="/transcripts"
							element={<Transcripts transcripts={transcripts} />}
						/>
						<Route
							path="/transcripts/:category"
							element={<TranscriptCategory categories={transcripts} />}
						/>
						<Route
							path="/transcripts/:category/:title"
							element={<Title categories={transcripts} />}
						/>
						{/* <Route
							path="/transcripts/anime"
							element={<Anime animeTitles={animeTitles} />}
						/>
						<Route
							path="/transcripts/anime/:animeTitle"
							element={<AnimeTitle animeTitles={animeTitles} />}
						/>
						<Route
							path="/transcripts/anime/:animeTitle/:season/:episodeNumber"
							element={<AnimeEpisode />}
						/>

						<Route
							path="/transcripts/light-novels"
							element={<LightNovels lightNovels={lightNovels} />}
						/>
						<Route
							path="/transcripts/light-novels/:lightNovelTitle"
							element={<LightNovelTitle lightNovelTitles={lightNovels} />}
						/>
						<Route
							path="/transcripts/light-novels/:lightNovelTitle/:chapter"
							element={<LightNovelChapter />}
						/>

						<Route
							path="/transcripts/youtube"
							element={<YouTube youtubeTranscripts={youtubeTranscripts} />}
						/>

						<Route
							path="/transcripts/youtube/:youtubeTitle"
							element={<YouTubeTitle youtubeTranscripts={youtubeTranscripts} />}
						/>
						<Route
							path="/transcripts/youtube/:youtubeTitle/:episodeNumber"
							element={<YouTubeTranscript />}
						/> */}
						{/* Include routes for other categories similarly */}

						{/* <Route path="/learning-notes" element={<LearningNotes />}></Route>

					<Route path="/japanese-journal" element={<JapaneseJournal />}></Route> */}
					</Routes>
				</MainColumn>
				{/* <MarkdownContent markdownFile={currentMarkdown} /> */}
				<Navigator />
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
	padding: 5.5em 3em;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}

	@media screen and (max-width: 480px) {
		font-size: 14px;
	}
`;

const MainColumn = styled.div`
	width: 65%;

	h1 {
		font-family: "NotoSansJP-Light";
		font-size: 1.625em;
		font-weight: 300;
		padding-bottom: 1em;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export default App;
