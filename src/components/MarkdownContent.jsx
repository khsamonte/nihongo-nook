import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { preprocessMarkdown } from "../utils/preprocessMarkdown";

const MarkdownContent = ({ markdownFile }) => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!markdownFile) {
      setMarkdown("");
      return; // Exit early
    }

    setLoading(true); // Start loading

    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(preprocessMarkdown(text));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching markdown:", error);
        setLoading(false); // Stop loading also in case of error
      });
  }, [markdownFile]);

  const renderMarkdown = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (!markdown) {
      return <p>Empty.</p>;
    } else {
      return (
        <ReactMarkdown
          children={markdown}
          components={{
            a: ({ node, ...props }) => {
              if (props.href === "character-name") {
                // This is where you'd return your custom component or styling
                return <NameSpan>{props.children}</NameSpan>;
              } else if (props.href === "location-name") {
                return <LocationSpan>{props.children}</LocationSpan>;
              }
              // Fallback for other links
              return <a {...props}>{props.children}</a>;
            },
          }}
        />
      );
    }
  };

  return <MarkdownContainer>{renderMarkdown()}</MarkdownContainer>;
};

const MarkdownContainer = styled.div`
  font-family: "NotoSansJP-Light";
  font-weight: 300;
  margin: 0 0 1.5em;
  line-height: 1.5;
  list-style: none;

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

  hr {
    border: none;
    border-top: 1px solid rgb(63, 65, 65);
    margin: 0 0 1.5em;
  }

  &.character-name {
    color: orange;
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
`;

const NameSpan = styled.span`
  color: rgb(239, 132, 75);
`;

const LocationSpan = styled.span`
  color: blueviolet;
`;

export default MarkdownContent;
