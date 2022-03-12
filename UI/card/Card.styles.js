import styled from "styled-components"
import { darken } from "polished"

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
      span {
        margin-right: ${({ theme }) => theme.spacing.md};
        h3 {
          i {
            margin-right: ${({ theme }) => theme.spacing.sm};
          }
          &:first-letter {
            text-transform: uppercase;
          }
        }
        p {
          color: grey;
          text-align: center;
        }
        a {
          color: tomato;
          .fa-video {
            font-size: 1.5rem;
          }
          &:hover {
            color: darken(0.5, tomato);
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
    article {
      text-align: center;
      padding: ${({ theme }) => theme.spacing.sm};
      .cats {
        flex-direction: column;
      }
    }
    &.hor {
      max-width: unset;
      .thumb {
        max-width: 35%;
      }
      article {
        span,
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
