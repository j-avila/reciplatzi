import styled from "styled-components"

export const SwitchWrap = styled.div`
  display: flex;
  position: relative;
  width: 64px;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  border-radius: 22px;
  background: ${({ variant }) => (variant == "dark" ? "#051638" : "#C2D4F6")};
  i {
    font-size: 25px;
    z-index: 2;
    opacity: 0.9;
    &.active {
      opacity: 1;
    }
    &.fa-sun {
      color: #dcff06;
    }
    &.fa-moon {
      color: #dfe3f3;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &:after {
    content: "";
    z-index: 1;
    position: absolute;
    border-radius: 100%;
    top: -4px;
    left: ${({ variant }) => (variant == "dark" ? "-8px" : "33px")};
    width: 36px;
    height: 36px;
    background: ${({ variant }) => (variant == "dark" ? "#0F245C" : "#D2DFFF")};
    transition: all 0.3s ease-in-out;
  }
`
