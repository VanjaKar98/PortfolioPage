import styled from "styled-components";

import logo from "../assets/images/logo/logo.png";

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

    &::before {
      content: "";
      display: block;
      width: 0.75rem;
      height: 0.75rem;
      background: url(${logo}) no-repeat center/contain;
    }
  }
`;

export default function AboutContent() {
  return (
    <>
      <p>
        My journey into programming has been anything but linear. I started as a
        computer technician in secondary school, then shifted focus to
        geotechnical engineering, eventually earning the title of Master
        Engineer of Geoengineering. I worked in civil engineering for several
        years, gaining valuable analytical and problem-solving experience.
      </p>

      <p>
        While continuing my non-programming career, I decided to return to my
        passion for technology. I enrolled in a Frontend Development course at
        Algebra University and later got accepted into IBM&#39;s Frontend
        Development Bootcamp. Along the way, I also honed my skills through
        Udemy courses and other online learning platforms.
      </p>

      <p>
        Today, I focus on building responsive, user-friendly web applications
        using React and modern JavaScript. I enjoy turning complex problems into
        clean, maintainable code and am constantly learning new technologies to
        grow as a frontend developer.
      </p>

      <StyledTechStack>
        <h4>Approach & Skills</h4>

        <StyledList>
          <li>Responsive and accessible web design</li>
          <li>Clean and maintainable code</li>
          <li>React, JavaScript, HTML, SCSS</li>
          <li>API integration and project-based learning</li>
          <li>Continuous skill improvement through self-study and bootcamps</li>
        </StyledList>
      </StyledTechStack>
    </>
  );
}
