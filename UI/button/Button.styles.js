import styled from "styled-components"
import { darken } from "polished"

export const ButWrapp = styled.button`
  border: 0;
  border-radius: 4px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ variant, theme }) => `${theme.colors[variant]}`};
  color: ${({ theme }) => theme.colors.background};
  transition: "background 0.3s ease-in-out";
  &:first-letter {
    text-transform: uppercase;
  }
  svg {
    display: inline-block;
    margin-right: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.background};
  }
  &:hover {
    cursor: pointer;
    transition: "all 0.5s ease-in-out";
    background: ${({ theme, variant }) => {
      const color = darken(0.3, theme.colors[variant])
      return color
    }};
  }
`
