import styled from "styled-components"

export const Spinner = styled.div`
  margin: 0 auto;
  text-align: center;
  i {
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
