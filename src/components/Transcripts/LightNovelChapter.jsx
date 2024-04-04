import { useParams } from "react-router-dom";

import MarkdownContent from "../MarkdownContent";

import { toTitleCase } from "../../utils/stringUtils";

const LightNovelChapter = () => {
	const basePath = process.env.PUBLIC_URL || "";

	const { lightNovelTitle, chapter } = useParams();
	const path = `${basePath}/markdown/light-novels/${lightNovelTitle}/${chapter}.md`;
	return (
		<>
			<h1>
				{toTitleCase(lightNovelTitle)} - Chapter {chapter}
			</h1>
			<MarkdownContent markdownFile={path} />
		</>
	);
};

export default LightNovelChapter;
