import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: block;
  text-align: center;
  box-sizing: border-box;
  ${({ $primary }) =>
    $primary &&
    css`
      width: 100%;
      padding: 0.5rem;
      color: var(--col-primary);
      border: 2px solid var(--border-primary);
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.01em;
      transition: color 0.5s linear;
      text-transform: capitalize;

      &:hover {
        cursor: pointer;
        color: var(--col-secondary);
      }

      &:active {
        border-color: var(--col-secondary);
      }
    `};
  ${({ $secondary }) =>
    $secondary &&
    css`
      width: 4rem;
      color: var(--col-tertiary);
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.01em;
      transition: color 0.5s linear;
      text-transform: capitalize;

      &:hover {
        cursor: pointer;
        color: var(--col-secondary);
      }
    `};
`;

export default function Button({ isActive, onClick, children, ...props }) {
  return (
    <StyledButton {...props} $isActive={isActive} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
