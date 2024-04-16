import { useParams } from "react-router-dom";

import MarkdownContent from "../MarkdownContent";

import { toTitleCase } from "../../utils/stringUtils";

const Transcript = () => {
  const basePath = process.env.PUBLIC_URL || "";
  const { category, title, transcript } = useParams();
  const path = `${basePath}/markdown/${category}/${title}/${transcript}.md`;
  console.log(title);
  return (
    <>
      <h1>
        {toTitleCase(title)} - {toTitleCase(transcript)}
      </h1>
      <MarkdownContent markdownFile={path} dataToProcess={title} />
    </>
  );
};

export default Transcript;
