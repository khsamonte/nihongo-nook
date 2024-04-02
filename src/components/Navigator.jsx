import React from "react";
import styled from "styled-components";

import bunnyGirlSenpaiS01E01Markdown from "../content/anime/bunny-girl-senpai/bunny-girl-senpai-s01e01.md";
import n3Choukai01Markdown from "../content/choukai/jlpt-n3/n3-choukai-01.md";

const Navigator = ({ selectMarkdown }) => {
  return (
    <NavigatorContainer>
      <ul>
        <li onClick={() => selectMarkdown(bunnyGirlSenpaiS01E01Markdown)}>
          Bunny Girl Senpai - Episode 01
        </li>
        <li onClick={() => selectMarkdown(n3Choukai01Markdown)}>
          JLPT N3 - Choukai 01
        </li>
      </ul>
    </NavigatorContainer>
  );
};

const NavigatorContainer = styled.nav`
  width: 35%;

  li {
    cursor: pointer;

    &:hover {
      color: skyblue;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Navigator;
