import styled from "styled-components";

import Button from "./Button";

import { device } from "../styles/breakpoints";

const StyledNavigation = styled.nav`
  position: relative;
  height: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 8rem;

    ${(props) => {
      switch (props.$offset) {
        case "home":
          return "transform: translateX(calc(-50% + 2rem));";
        case "projects":
          return "transform: translateX(calc(-50% + 7rem));";
        case "about":
          return "transform: translateX(calc(-50% + 12rem));";
        case "contact":
          return "transform: translateX(calc(-50% + 17rem));";
      }
    }}

    transition: transform 1s ease-in-out;
  }

  &::before {
    z-index: 2;
    height: 3px;
    bottom: calc(-1rem - 2.5px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--underline) 35%,
      var(--underline) 65%,
      transparent 100%
    );

    @media ${device.mobileLandscape} {
      bottom: calc(-0.5rem - 2.5px);
    }
  }

  &::after {
    z-index: 1;
    height: 10px;
    bottom: calc(-1rem - 6px);
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--glow) 35%,
      var(--glow) 65%,
      transparent 100%
    );
    filter: blur(6px);

    @media ${device.mobileLandscape} {
      bottom: calc(-0.5rem - 2.5px);
    }
  }
`;

const StyledList = styled.ul`
  height: 100%;
  margin-right: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    margin-right: 0;
  }
`;

export default function Navigation({ activeBtn, handleActiveBtn }) {
  return (
    <StyledNavigation $offset={activeBtn}>
      <StyledList>
        {navBtns.map((btn) => (
          <li key={btn.label}>
            <Button
              $secondary
              type="button"
              isActive={btn.label === activeBtn}
              onClick={() => handleActiveBtn(btn.label)}
            >
              {btn.label}
            </Button>
          </li>
        ))}
      </StyledList>
    </StyledNavigation>
  );
}

const navBtns = [
  { label: "home" },
  { label: "projects" },
  { label: "about" },
  { label: "contact" },
];
