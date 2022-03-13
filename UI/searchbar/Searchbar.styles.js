import styled from "styled-components"

export const Dropdown = styled.div`
  position: relative;
  .filter-drop {
    position: absolute;
    top: 200%;
    right: 0;
    color: white;
    background-color: ${({ theme }) => {
      const color = theme.colors.darken.background
      return color
    }};
    p {
      padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }
    ul {
      list-style: none;
      padding-left: 0;
      width: max-content;
      li {
        margin-bottom: ${({ theme }) => theme.spacing.sm};
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
        &:hover {
          cursor: pointer;
          background: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  i {
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      cursor: pointer;
    }
  }
`
export const SearchWrapp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  width: 60%;
  border-radius: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  section {
    width: 100%;
    i.fa-search {
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
    i.fa-close {
      margin-left: ${({ theme }) => theme.spacing.sm};
      font-size: 20px;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    input {
      font-size: larger;
      border: 0;
      width: 90%;
      outline: none;
      box-sizing: content-box;
      background: transparent;
      padding: ${({ theme }) => `${theme.spacing.sm} 0`};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    section {
      width: 100%;
    }
  }
`
