import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";

import MarkdownContent from "../MarkdownContent";

const Title = ({ items }) => {
  const { group, category, title } = useParams();

  const selectedGroup = items?.find((item) => item?.url.includes(group));

  const selectedCategory = selectedGroup?.children?.find((item) =>
    item?.url.includes(category)
  );

  const selectedTitle = selectedCategory?.children?.find((item) =>
    item?.url?.includes(title)
  );

  const renderList = () => {
    if (group === "transcripts") {
      const data = selectedTitle?.children;
      if (data === null || data === undefined || data?.length === 0) {
        return <Text>No transcripts.</Text>;
      } else if (group === "transcripts") {
        return (
          <NavList>
            {data?.map((transcript) => (
              <NavItem key={transcript?.name}>
                <Link to={transcript?.url}>{transcript?.name}</Link>
              </NavItem>
            ))}
          </NavList>
        );
      }
    } else if (group === "structure" || group === "journal") {
      const basePath = process.env.PUBLIC_URL || "";
      const path = `${basePath}/markdown/${category}/${title}.md`;

      return (
        <StructureContainer>
          <MarkdownContent markdownFile={path} dataToProcess={category} />
        </StructureContainer>
      );
    }
  };

  return (
    <div>
      <h1>{selectedTitle?.name}</h1>
      {renderList()}
    </div>
  );
};

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  line-height: 1;
  padding: 0.5em 0;
  width: 100%;
`;

const Link = styled(NavLink)`
  color: skyblue;
  font-family: Helvetica;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  padding: 0.5em 0;
  text-decoration: none;
`;

const StructureContainer = styled.div`
  h3,
  h4,
  a {
    color: rgb(239, 132, 75);
  }

  p,
  ul {
    font-size: 1em;
  }

  table,
  table th,
  table td,
  pre {
    color: #d6d0c6;
    font-size: 1em;
    font-weight: 300;
  }
`;

export default Title;