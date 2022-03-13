import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 0 auto;

  header {
    width: 100%;
    display: flex;
    background: #121f3d;
    max-height: 46px;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    svg {
      display: block;
      margin-left: 2vw;
    }
    .theme-switch {
      margin-right: 2vw;
    }
  }
  footer {
    text-align: center;
    color: teal;
    padding: ${({ theme }) => theme.spacing.md};

    .sticky-favs {
      position: fixed;
      bottom: 5vh;
      right: 2vw;
      animation: transitionEnter 0.2s;
      box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);
      &.exit {
        animation: transitionExit 0.1s;
      }
      /* animations */
      @keyframes transitionEnter {
        0% {
          opacity: 0;
          bottom: -10vw;
        }
        100% {
          opacity: 1;
          bottom: 0vw;
        }
      }
    }
    @keyframes transitionExit {
      0% {
        opacity: 1;
        bottom: 0vw;
      }
      100% {
        opacity: 0;
        bottom: -10vw;
      }
    }
  }
`
export const HeroCover = styled.div`
  width: 100%;
  max-height: fill-available;
  position: relative;
  margin: 0 auto;
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
  .actions {
    z-index: 2;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    top: -150px;
    button {
      margin: 0 10px;
    }
  }
  @media (min-width: 2000px) {
    max-width: 1400px;
  }
  @media (max-width: 768px) {
    h1 {
      top: 0;
      right: 0;
      position: relative;
      font-size: 50px;
      text-align: center;
      margin: 0 auto;
      padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }
    .actions {
      top: 0;
      padding: 1rem;
      margin: 2rem auto;
      flex-direction: column;
      .but-actions {
        width: 100%;
        display: flex;
        margin-top: 1rem;
        justify-content: space-between;
      }
    }
  }
  /* tablets */
  @media (min-width: 767px) and (max-width: 1250px) {
    h1 {
      top: 0;
      right: 0;
      position: relative;
      font-size: 60px;
      text-align: center;
      margin: 0 auto;
      padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }
    .actions {
      max-width: 80vw;
      flex-direction: column;
      top: 0;
      padding: 1rem;
      margin: 2rem auto;
      flex-direction: column;

      .but-actions {
        width: 100%;
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;
      }
    }
  }
`
export const ContentGrid = styled.div`
  margin: 5vh auto;
  max-width: 1250px;
  .layout-switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: fit-content;
    font-size: 20px;
    margin: 1rem;
    span {
      i {
        margin: 0 5px;
        color: ${({ theme }) => theme.colors.background};
        &.active {
          color: ${({ theme }) => theme.colors.primary};
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  #content {
    grid-template-columns: ${({ layout }) => layout};
    margin-top: 0;
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;
    #card {
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    #content {
      padding: ${({ theme }) => theme.spacing.md};
      box-sizing: border-box;
      grid-template-columns: ${({ layout }) =>
        `${layout === "1fr" ? "1fr" : "1fr 1fr"}`};
      column-gap: 5px;
      #card {
        &.hor {
          height: fit-content;
          article {
            width: 55%;
            h2 {
              text-align: left;
            }
          }
        }
      }
    }
  }

  /* tablets */
  @media (min-width: 767px) and (max-width: 1250px) {
    #content {
      padding: ${({ theme }) => theme.spacing.md};
      box-sizing: border-box;
      grid-template-columns: ${({ layout }) =>
        `${layout === "1fr" ? "1fr" : "repeat(3, 1fr)"}`};
      column-gap: 5px;
      #card {
        max-width: 230px;
        &.hor {
          max-width: 80vw;
          height: fit-content;
          article {
            width: 55%;
            h2 {
              text-align: left;
              font-size: xx-large;
            }
            .cats {
              .section {
                flex-direction: column;
                span {
                  h3 {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
