import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import HomePage from "./components/HomePage";
import Transcripts from "./components/Transcripts/index";
import TranscriptCategory from "./components/Transcripts/TranscriptCategory";
import Title from "./components/Transcripts/Title";
import Transcript from "./components/Transcripts/Transcript";
import Navigator from "./components/Navigator";
import navigationData from "./navigationData.json";

const transcriptCategories = navigationData?.categories[0].children;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage categories={navigationData?.categories} />
            </MainLayout>
          }
        />
        <Route
          path="/:group/"
          element={
            <MainLayout>
              <Transcripts transcripts={transcriptCategories} />
            </MainLayout>
          }
        />
        <Route
          path="/:group/:category"
          element={
            <MainLayout>
              <TranscriptCategory categories={transcriptCategories} />
            </MainLayout>
          }
        />
        <Route
          path="/:group/:category/:title"
          element={
            <MainLayout>
              <Title categories={transcriptCategories} />
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
