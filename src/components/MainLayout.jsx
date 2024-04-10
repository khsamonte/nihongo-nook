import React from "react";
import { styled } from "styled-components";
import Navigator from "../components/Navigator";

const MainLayout = ({ children }) => {
	return (
		<SiteContent>
			<MainColumn>{children}</MainColumn>
			<Navigator />
		</SiteContent>
	);
};

export default MainLayout;

const SiteContent = styled.div`
	display: flex;
	font-size: 16px;
	grid-gap: 30px;
	margin: 0 auto;
	max-width: 1366px;
	padding: 5.5em 3em;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		padding: 5.5em 2.5em;
	}

	@media screen and (max-width: 480px) {
		font-size: 14px;
	}
`;

const MainColumn = styled.div`
	width: 65%;

	h1 {
		color: rgb(239, 132, 75);
		font-family: "NotoSansJP-Light";
		font-size: 1.625em;
		font-weight: 300;
		padding-bottom: 1em;
	}

	blockquote {
		padding: 0 2em;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
