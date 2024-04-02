import React, { useState } from "react";
import styled from "styled-components";

import MarkdownContent from "./components/MarkdownContent";

import Navigator from "./components/Navigator";

function App() {
  const [currentMarkdown, setCurrentMarkdown] = useState();

  // Function to change the Markdown content
  const selectMarkdown = (markdown) => {
    setCurrentMarkdown(markdown);
  };

  return (
    <SiteContent>
      <MarkdownContent markdownFile={currentMarkdown} />
      <Navigator selectMarkdown={selectMarkdown} />
    </SiteContent>
  );
}

const SiteContent = styled.div`
  display: flex;
  font-size: 16px;
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

  p,
  ul {
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

export default App;
