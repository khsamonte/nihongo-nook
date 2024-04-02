import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MarkdownContent = ({ markdownFile }) => {
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		fetch(markdownFile)
			.then((response) => response.text())
			.then((text) => setMarkdown(text));
	}, [markdownFile]);

	return (
		<MarkdownContainer>
			<ReactMarkdown>{markdown}</ReactMarkdown>
		</MarkdownContainer>
	);
};

const MarkdownContainer = styled.div`
	width: 65%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export default MarkdownContent;
