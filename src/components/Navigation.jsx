import styled from "styled-components";

import Button from "./Button";

const StyledNavigation = styled.nav`
  position: relative;
  height: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 8rem;
    transform: translateX(calc(-50% + ${({ $offset = "2rem" }) => $offset}));
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
  }
`;

const StyledList = styled.ul`
  height: 100%;
  margin-right: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export default function Navigation({ activeBtn, handleActiveBtn }) {
  return (
    <StyledNavigation
      $offset={navBtns.find((btn) => btn.label === activeBtn).offset}
    >
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
  { label: "home", offset: "2rem" },
  { label: "projects", offset: "7rem" },
  { label: "about", offset: "12rem" },
  { label: "contact", offset: "17rem" },
];
