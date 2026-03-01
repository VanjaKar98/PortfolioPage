import styled from "styled-components";

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
  { name: "html", logo: "../assets/images/html_logo.png" },
  { name: "css", logo: "../assets/images/css_logo.png" },
  { name: "scss", logo: "../assets/images/sass_logo.png" },
  { name: "js", logo: "../assets/images/js_logo.png" },
  { name: "react", logo: "../assets/images/react_logo.png" },
];
