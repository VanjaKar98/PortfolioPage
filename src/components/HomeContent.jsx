import styled from "styled-components";

import logo from "../assets/images/logo.png";

const StyledTechStack = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  & > li {
    display: flex;
    align-items: center;
    gap: 5px;

    & > span {
      display: block;
      width: 0.75rem;
      height: 0.75rem;
      background: url(${logo}) no-repeat center/contain;
    }
  }
`;

export default function HomeContent() {
  return (
    <>
      <p>
        I am a junior frontend developer specializing in React and modern
        JavaScript. I build responsive web applications that focus on clean
        structure, usability, and maintainable code. I&#39;m currently seeking a
        junior frontend role where I can contribute to real projects and
        continue growing as a developer.
      </p>
      <StyledTechStack>
        <h4>Tech stack</h4>

        <StyledList>
          <li>
            <span></span>HTML
          </li>
          <li>
            <span></span>SCSS
          </li>
          <li>
            <span></span>JavaScript
          </li>
          <li>
            <span></span>React
          </li>
          <li>
            <span></span>GitHub
          </li>
        </StyledList>
      </StyledTechStack>
    </>
  );
}
