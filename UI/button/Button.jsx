/* eslint-disable react/display-name */
import React from "react"
import PropTypes from "prop-types"
import { ButWrapp } from "./Button.styles"

const Button = ({
  children,
  icon,
  label,
  type = "button",
  fullWidth,
  variant = "primary",
  onClick,
  size,
  ...props
}) => {
  return (
    <ButWrapp
      className={props.className}
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {icon && <i className={icon} />}
      {label || children}
    </ButWrapp>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf(["primary", "secondary", "accent", "background"]),
  ]),
  onClick: PropTypes.func,
  size: PropTypes.string,
}

export default Button
