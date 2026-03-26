import styled, { css } from "styled-components";

const StyledLink = styled.a`
  display: block;

  &:hover {
    cursor: pointer;
  }

  ${({ $text }) =>
    $text &&
    css`
      font-size: 1rem;
      line-height: 1.6;
      color: var(--col-secondary);
    `};

  ${({ $iconSm }) =>
    $iconSm &&
    css`
      width: 1.2rem;
      height: 1.2rem;
      color: var(--col-primary);

      svg {
        display: block;
        width: 100%;
        height: 100%;
        color: currentColor;
      }
    `};

  ${({ $iconLg }) =>
    $iconLg &&
    css`
      width: 1.5rem;
      height: 1.5rem;
      color: var(--col-secondary);

      svg {
        display: block;
        width: 100%;
        height: 100%;
        color: currentColor;
      }
    `};
`;

export default function Link({ href, children, ...props }) {
  return (
    <StyledLink {...props} href={href} target="_blank">
      {children}
    </StyledLink>
  );
}
