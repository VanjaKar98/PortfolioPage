import Article from "./Article";

import { projects } from "../data/projects";

import styled from "styled-components";

const StyledProjectsList = styled.ul`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 320px));
  justify-content: center;
  align-content: start;
  gap: 2rem;
`;

export default function ProjectsContent() {
  return (
    <StyledProjectsList>
      {projects.map((project) => (
        <li key={project.id}>
          <Article
            title={project.title}
            desc={project.desc}
            img={project.img}
            tech={project.tech}
          />
        </li>
      ))}
    </StyledProjectsList>
  );
}
