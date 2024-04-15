import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Navigator from "../components/Navigator";

const MainLayout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isNavOpen) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavOpen]);

  const toggleNav = (e) => {
    e.stopPropagation();
    setIsNavOpen(!isNavOpen);
  };

  return (
    <SiteContent>
      <MainColumn>{children}</MainColumn>
      <Navigator isNavOpen={isNavOpen} />
      <NavButton onClick={toggleNav}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8C4 7.58579 4.33579 7.25 4.75 7.25H19.25C19.6642 7.25 20 7.58579 20 8C20 8.41421 19.6642 8.75 19.25 8.75H4.75C4.33579 8.75 4 8.41421 4 8ZM4 16C4 15.5858 4.33579 15.25 4.75 15.25H11.25C11.6642 15.25 12 15.5858 12 16C12 16.4142 11.6642 16.75 11.25 16.75H4.75C4.33579 16.75 4 16.4142 4 16ZM4.75 11.25C4.33579 11.25 4 11.5858 4 12C4 12.4142 4.33579 12.75 4.75 12.75H19.25C19.6642 12.75 20 12.4142 20 12C20 11.5858 19.6642 11.25 19.25 11.25H4.75Z"
          ></path>
        </svg>
      </NavButton>
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
  position: relative;

  @media screen and (max-width: 1024px) {
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

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const NavButton = styled.button`
  background: #ececec;
  border: 0;
  cursor: pointer;
  display: none;
  padding: 0.3em;
  position: fixed;
  top: 0;
  right: 0;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;
