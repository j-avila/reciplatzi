import styled from "styled-components"
import { darken } from "polished"

export const ButWrapp = styled.button`
  border: 0;
  border-radius: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.md}`};
  background: ${({ variant, theme }) => `${theme.colors[variant]}`};
  color: ${({ theme }) => theme.colors.background};
  transition: "all 0.3s ease-in-out";
  font-size: ${({ size }) =>
    size === "large" ? "30px" : size === "medium" ? "22px" : "16px"};
  &:first-letter {
    text-transform: uppercase;
  }
  i {
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
