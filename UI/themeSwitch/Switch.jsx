import React from "react"
import PropTypes from "prop-types"
import { SwitchWrap } from "./Switch.styles"

const Switch = ({ theme, onClick, className }) => {
  return (
    <SwitchWrap variant={theme} className={className}>
      <i
        className={`fa-solid fa-moon ${theme === "dark" ? "active" : ""}`}
        onClick={() => onClick("dark")}
      />
      <i
        className={`fa-solid fa-sun ${theme === "light" ? "active" : ""}`}
        onClick={() => onClick("light")}
      />
    </SwitchWrap>
  )
}

Switch.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.string.isRequired,
}

export default Switch
