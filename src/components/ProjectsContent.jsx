import styled from "styled-components";

import Article from "./Article";

import { projects } from "../data/projects";

import { useState, useEffect } from "react";

import { device } from "../styles/breakpoints";

const StyledProjectsList = styled.ul`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 320px));
  justify-content: center;
  align-content: start;
  gap: 2rem;

  & li,
  & a {
    width: auto;
  }

  @media ${device.mobileLandscape} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 280px));
    gap: 1rem;
  }

  @media ${device.mobile} {
    gap: 1rem;
  }
`;

export default function ProjectsContent({ wasVisited, setWasVisited }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!wasVisited) {
      const timeout1 = setTimeout(() => setIsAnimated(true), 500);

      const timeout2 = setTimeout(() => setIsAnimated(false), 1000);

      setWasVisited(true);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, []);

  return (
    <StyledProjectsList>
      {projects.map((project) => (
        <li key={project.id}>
          <a href={project.url} target="_blank">
            <Article
              title={project.title}
              desc={project.desc}
              img={project.img}
              tech={project.tech}
              isAnimated={isAnimated}
            />
          </a>
        </li>
      ))}
    </StyledProjectsList>
  );
}
