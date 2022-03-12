import styled from "styled-components"

export const DrawerContainer = styled.div`
  position: fixed;
  z-index: 10;
  height: 90vh;
  right: 0;
  top: 0;
  animation: containerTransitionEnter 0.5s;

  .drawer {
    background: ${({ theme }) => theme.colors.primary};
    position: relative;
    box-sizing: border-box;
    width: 40vw;
    height: 100vh;
    overflow: auto;
    z-index: 3;
    padding: 1rem;
    .head {
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      margin-bottom: 1rem;
      font-size: larger;
    }
    &.exit {
      animation: drawerTransitionExit 0.6s;
    }
    .no-favs {
      margin: 50% auto;
      font-size: larger;
      text-align: center;
      color: ${({ theme }) => theme.colors.background};
    }
  }

  &.exit {
    animation: containerTransitionExit 0.6s;
  }

  .veil {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  /* animattions */
  @keyframes containerTransitionEnter {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes drawerTransitionEnter {
    0% {
      opacity: 0;
      right: -10vw;
    }
    100% {
      opacity: 1;
      right: 0vw;
    }
  }
  @keyframes containerTransitionExit {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes drawerTransitionExit {
    0% {
      opacity: 1;
      right: 0vw;
    }
    100% {
      opacity: 0;
      right: -10vw;
    }
  }

  @media (max-width: 768px) {
    .drawer {
      width: 100vw;
      .drawer-content {
        grid-template-columns: 1fr !important;
        #card {
          height: 120px;
        }
      }
    }
  }
`
