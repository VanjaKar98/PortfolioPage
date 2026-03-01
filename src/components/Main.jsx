import { useState, useEffect } from "react";

import styled from "styled-components";

import HomeContent from "./HomeContent";

import ProjectsContent from "./ProjectsContent";

import AboutContent from "./AboutContent";

import ContactContent from "./ContactContent";

const StyledMain = styled.main`
  width: 100%;
  max-width: 1200px;
  height: calc(100dvh - 7rem);
  padding: 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
`;

const StyledMainContent = styled.div`
  width: 100%;
  height: 100%;
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
`;

export default function Main({ activeBtn }) {
  const [visibleView, setVisibleView] = useState(activeBtn);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (visibleView === activeBtn) return;

    setIsVisible(false);

    const timeout = setTimeout(() => {
      setVisibleView(activeBtn);
      setIsVisible(true);
    }, 750);

    return () => clearTimeout(timeout);
  }, [activeBtn]);

  let content;

  switch (visibleView) {
    case "home":
      content = <HomeContent />;
      break;

    case "projects":
      content = <ProjectsContent />;
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
    <StyledMain $isVisible={isVisible}>
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
