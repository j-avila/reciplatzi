import styled from "styled-components"

export const Wrapper = styled.div`
  header {
    width: 100%;
    background: #121f3d;
    max-height: 46px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    svg {
      display: block;
      margin-left: 2vw;
    }
  }
`
export const HeroCover = styled.div`
  width: 100%;
  max-height: fill-available;
  position: relative;
  h1 {
    z-index: 2;
    position: absolute;
    right: 2vh;
    top: 12vh;
    max-width: 638px;
  }
  svg {
    z-index: 1;
  }
`
