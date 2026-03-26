import styled from "styled-components";

import { useState, useEffect } from "react";

import HomeContent from "./HomeContent";

import ProjectsContent from "./ProjectsContent";

import AboutContent from "./AboutContent";

import ContactContent from "./ContactContent";

import { device } from "../styles/breakpoints";

const StyledMain = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: 0;
  padding: 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
  opacity: ${({ $isContentVisible }) => ($isContentVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${({ $isContentVisible }) =>
    $isContentVisible ? "auto" : "none"};

  @media ${device.mobile} {
    gap: 0.5rem;
  }

  @media ${device.mobileLandscape} {
    gap: 0.3rem;
  }

  @media ${device.mobile}, ${device.mobileLandscape} {
    padding: 0.5rem 1rem 1rem;
  }
`;

const StyledMainContent = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;

  scrollbar-width: thin;
  scrollbar-color: var(--col-secondary) transparent;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--col-secondary);
    border-radius: 8px;
  }

  @media ${device.mobile} {
    gap: 1rem;
  }

  @media ${device.mobileLandscape} {
    gap: 0.75rem;
  }
`;

export default function Main({ activeBtn }) {
  const [visibleView, setVisibleView] = useState(activeBtn);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [projectsVisited, setProjectsVisited] = useState(false);

  useEffect(() => {
    if (visibleView === activeBtn) return;

    setIsContentVisible(false);

    const timeout = setTimeout(() => {
      setVisibleView(activeBtn);
      setIsContentVisible(true);
    }, 750);

    return () => clearTimeout(timeout);
  }, [activeBtn]);

  let content;

  switch (visibleView) {
    case "home":
      content = <HomeContent />;
      break;

    case "projects":
      content = (
        <ProjectsContent
          projectsVisited={projectsVisited}
          setProjectsVisited={setProjectsVisited}
        />
      );
      break;

    case "about":
      content = <AboutContent />;
      break;

    case "contact":
      content = <ContactContent />;
      break;

    default:
      content = null;
  }

  const title = mainTitle.find((btn) => btn.label === visibleView).title;

  return (
    <StyledMain $isContentVisible={isContentVisible}>
      <h3>{title}</h3>
      <StyledMainContent>{content}</StyledMainContent>
    </StyledMain>
  );
}

const mainTitle = [
  { label: "home", title: "junior frontend developer | React & JavaScript" },
  { label: "projects", title: "my projects" },
  { label: "about", title: "my journey" },
  { label: "contact", title: "contact me" },
];
