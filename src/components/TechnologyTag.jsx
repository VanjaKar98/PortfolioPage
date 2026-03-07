import styled from "styled-components";

import htmlLogo from "../assets/images/tech/html_logo.png";
import cssLogo from "../assets/images/tech/css_logo.png";
import sassLogo from "../assets/images/tech/sass_logo.png";
import jsLogo from "../assets/images/tech/js_logo.png";
import reactLogo from "../assets/images/tech/react_logo.png";

const StyledTag = styled.div`
  font-size: 0.8rem;
  padding: 0.35rem 0.6rem;
  border: 2px solid var(--border-primary);
  border-radius: 0.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StyledLogo = styled.span`
  display: block;
  width: 1.3rem;
  height: 1.3rem;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default function TechnologyTag({ tech }) {
  const logo = technology.find((el) => el.name === tech).logo;

  return (
    <StyledTag>
      <span>{tech}</span>
      <StyledLogo>
        <img src={logo} alt={tech + " logo"} />
      </StyledLogo>
    </StyledTag>
  );
}

const technology = [
  { name: "html", logo: htmlLogo },
  { name: "css", logo: cssLogo },
  { name: "scss", logo: sassLogo },
  { name: "js", logo: jsLogo },
  { name: "react", logo: reactLogo },
];
