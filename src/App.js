import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import MainLayout from "./components/MainLayout";

// Pages
import HomePage from "./components/HomePage";

// Transcripts
import Transcripts from "./components/Transcripts/index";
import TranscriptCategory from "./components/Transcripts/TranscriptCategory";
import Title from "./components/Transcripts/Title";
import Transcript from "./components/Transcripts/Transcript";

// Navigation
import navigationData from "./navigationData.json";

const categories = navigationData?.categories;

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<HomePage categories={categories} />
						</MainLayout>
					}
				/>
				<Route
					path="/:group/"
					element={
						<MainLayout>
							<Transcripts items={categories} />
						</MainLayout>
					}
				/>
				<Route
					path="/:group/:category"
					element={
						<MainLayout>
							<TranscriptCategory items={categories} />
						</MainLayout>
					}
				/>
				<Route
					path="/:group/:category/:title"
					element={
						<MainLayout>
							<Title items={categories} />
						</MainLayout>
					}
				/>
				<Route
					path="/:group/:category/:title/:transcript"
					element={
						<MainLayout>
							<Transcript />
						</MainLayout>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
