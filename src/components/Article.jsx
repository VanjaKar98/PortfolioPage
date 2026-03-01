import styled, { css, keyframes } from "styled-components";

import { useState, useEffect } from "react";

import TechnologyTag from "./TechnologyTag";

const highlightAnimation = keyframes`
  0%   { transform: translateX(-120%) scaleX(0.8) rotateZ(0deg); opacity: 0; }
  40%  { transform: translateX(57%) scaleX(1.2) rotateZ(12deg); opacity: 1; }
  60%  { transform: translateX(120%) scaleX(1) rotateZ(15deg); opacity: 0.5; }
  100% { transform: translateX(170%) scaleX(0.8) rotateZ(15deg); opacity: 0; }
`;

const StyledArticle = styled.article`
  position: relative;
  width: 320px;
  height: 370px;
  padding: 1rem;
  background: var(--bg-secondary);
  border: 2px solid var(--border-primary);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  overflow: hidden;

  &::before {
    position: absolute;
    top: calc(2.2rem + 15px);
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    height: 2px;
    background: var(--border-primary);
    content: "";
  }

  &::after {
    width: 50%;
    height: 130%;
    position: absolute;
    top: -30%;
    left: 0;
    z-index: 99;
    transform: translateX(-100%);
    transform-origin: 0 100%;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 60%
    );
    background-size: 100%;
    background-repeat: no-repeat;
    content: "";
    ${({ $isHovered }) =>
      $isHovered &&
      css`
        animation: ${highlightAnimation} 0.5s linear;
      `}
  }

  &:hover {
    cursor: pointer;
  }

  iframe {
    width: 100%;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

const StyledTechContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default function Article({ title, desc, img, tech }) {
  const [isHovered, setHover] = useState(false);

  function hoverHandle() {
    setHover(true);
  }

  useEffect(() => {
    if (isHovered === true) {
      const timeout = setTimeout(() => setHover(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isHovered]);

  return (
    <StyledArticle onMouseEnter={hoverHandle} $isHovered={isHovered}>
      <h4>{title}</h4>
      <p>{desc}</p>
      <iframe
      // src="https://vanjakar98.github.io/ConsultPage/"
      // frameborder="0"
      ></iframe>
      <StyledTechContainer>
        {tech.map((tech) => (
          <li key={tech}>
            <TechnologyTag tech={tech} />
          </li>
        ))}
      </StyledTechContainer>
    </StyledArticle>
  );
}
