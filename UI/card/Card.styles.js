import styled from "styled-components"

export const CardWrapper = styled.div`
  width: ${({ size }) => (size ? `${size}px` : "390px")};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) =>
    `${theme.spacing.md} ${theme.spacing.md} 0 0`};
  overflow: hidden;
  .thumb {
    width: 100%;
    height: 320px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: inherit;
    }
    .fa-bookmark {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 35px;
      color: ${({ theme }) => theme.colors.background};
      &.fa-solid {
        color: ${({ theme }) => theme.colors.accent};
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  article {
    padding: ${({ theme }) => theme.spacing.md};
    h2 {
      font-size: 35px;
      margin-top: 0;
      height: 80px;
      /* white-space: nowrap; */
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cats {
      display: flex;
      justify-content: flex-start;
      .section {
        margin-right: ${({ theme }) => theme.spacing.md};
        span {
          display: flex;
          align-items: center;
          justify-content: space-around;
          i {
            margin-right: ${({ theme }) => theme.spacing.sm};
          }
        }
        h3 {
          &:first-letter {
            text-transform: uppercase;
          }
        }
        p {
          color: grey;
          margin: 0;
          text-align: center;
        }
        a {
          color: ${({ theme }) => theme.colors.primary};
          .fa-video {
            font-size: 1.5rem;
          }
          &:hover {
            color: ${({ theme }) => theme.colors.darken.primary};
          }
        }
      }
    }
  }

  &.hor {
    width: ${({ size }) => (size ? `${size}px` : "100%")};
    border-radius: ${({ theme }) =>
      `0 ${theme.spacing.md} ${theme.spacing.md} 0`};
    display: flex;
    flex-direction: row;
    height: 200px;
    .thumb {
      max-width: 40%;
      height: fit-content;
    }
    article {
      margin-top: 0%;
      h2 {
        font-size: 24px;
      }
    }
    .cats {
      justify-content: space-between;
      span {
        margin-right: 0;
        h3,
        p {
          font-size: medium;
        }
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 180px;
    .thumb {
      height: 180px;
    }
    max-width: 170px;

    article {
      text-align: center;
      padding: ${({ theme }) => theme.spacing.sm};
      h2 {
        font-size: 25px;
        height: fit-content;
      }
      .cats {
        flex-direction: column;
        .section {
          display: flex;
          margin-bottom: ${({ theme }) => theme.spacing.sm};
          flex-direction: row;
        }
        h3 {
          display: none;
        }
      }
    }
    &.hor {
      max-width: unset;
      .thumb {
        max-width: 35%;
      }
      article {
        .section,
        p {
          font-size: small;
        }

        h2 {
          margin-bottom: ${({ theme }) => theme.spacing.sm};
          height: max-content;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cats {
          flex-direction: row;
        }
      }
    }
  }
  @media (min-width: 767px) and (max-width: 1250px) {
    max-width: 180px;
    .thumb {
      height: 180px;
    }
    max-width: 170px;

    article {
      text-align: center;
      padding: ${({ theme }) => theme.spacing.sm};
      h2 {
        font-size: 25px;
        height: fit-content;
      }
      .cats {
        flex-direction: column;
        .section {
          display: flex;
          margin-bottom: ${({ theme }) => theme.spacing.sm};
          flex-direction: row;
        }
        h3 {
          display: none;
        }
      }
    }
    &.hor {
      max-width: 80vw;
      .thumb {
        max-width: 35%;
      }
      article {
        .section,
        p {
          font-size: small;
        }

        h2 {
          margin-bottom: ${({ theme }) => theme.spacing.sm};
          height: max-content;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cats {
          flex-direction: row;
        }
      }
    }
  }
`
