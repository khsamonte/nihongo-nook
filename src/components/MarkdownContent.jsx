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

	const renderers = {
		// Custom renderer for links
		link: ({ href, children }) => {
			if (href === "character-name") {
				return <span className="character-name">{children}</span>;
			}
			return <a href={href}>{children}</a>;
		},
	};

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
								return (
									<span style={{ color: "orange" }}>{props.children}</span>
								);
							}
							// Fallback for other links
							return <a {...props}>{props.children}</a>;
						},
					}}
				/>
			);
		}
	};

	return <>{renderMarkdown()}</>;
};

export default MarkdownContent;
