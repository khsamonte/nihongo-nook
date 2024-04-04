import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

const Transcripts = ({ transcripts }) => {
  const { group } = useParams();

  const renderTranscripts = () => {
    if (group === "transcripts") {
      return (
        <>
          <h1>Transcripts</h1>
          <NavList>
            {transcripts.map((item) => (
              <NavItem key={item?.url}>
                <Link to={`${item?.url}`}>{item?.name}</Link>
              </NavItem>
            ))}
          </NavList>
        </>
      );
    }

    return <p>Nothing here.</p>;
  };

  return <div>{renderTranscripts()}</div>;
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
  font-size: 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Transcripts;
