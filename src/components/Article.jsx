import styled, { css, keyframes } from "styled-components";

import TechnologyTag from "./TechnologyTag";

import Link from "./Link";

import { device } from "../styles/breakpoints";

import { GithubIcon, LiveIcon } from "./Icons";

const highlightAnimation = keyframes`
  0%   { transform: translateX(-120%) scaleX(0.8) rotateZ(0deg); opacity: 0; }
  40%  { transform: translateX(57%) scaleX(1.2) rotateZ(12deg); opacity: 1; }
  60%  { transform: translateX(120%) scaleX(1) rotateZ(15deg); opacity: 0.5; }
  100% { transform: translateX(190%) scaleX(0.8) rotateZ(15deg); opacity: 0; }
`;

const StyledArticle = styled.article`
  position: relative;
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
    ${({ $isAnimated }) =>
      $isAnimated &&
      css`
        animation: ${highlightAnimation} 0.5s linear;
      `}
  }

  &:hover {
    cursor: pointer;
  }

  & > div:first-of-type {
    @media ${device.mobileLandscape} {
      display: none;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media ${device.desktop} {
    padding-bottom: 2rem;
  }

  @media ${device.mobileLandscape} {
    padding: 1rem;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding-bottom: 1.5rem;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/0.6;
  border: 2px solid var(--border-primary);
`;

const StyledImage = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.5s linear;
`;

const StyledLinkContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StyledTechStack = styled.ul`
  min-height: calc(2 * (2rem + 4px) + 0.5rem);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default function Article({
  title,
  desc,
  img,
  tech,
  isAnimated,
  site,
  code,
}) {
  return (
    <StyledArticle $isAnimated={isAnimated}>
      <h4>{title}</h4>
      <p>{desc}</p>
      <StyledImageContainer>
        <StyledImage src={img} alt="Project preview" />
      </StyledImageContainer>
      <StyledTechStack>
        {tech.map((tech) => (
          <li key={tech}>
            <TechnologyTag tech={tech} />
          </li>
        ))}
      </StyledTechStack>
      <StyledLinkContainer>
        <Link $iconSm href={site}>
          <LiveIcon />
        </Link>
        <Link $iconSm href={code}>
          <GithubIcon />
        </Link>
      </StyledLinkContainer>
    </StyledArticle>
  );
}
