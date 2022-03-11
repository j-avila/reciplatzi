/* eslint-disable react/display-name */
import React, { forwardRef } from "react"
import { ButWrapp } from "./Button.styles"

const Button = forwardRef(
  ({
    children,
    icon,
    label,
    type = "button",
    fullWidth,
    variant = "primary",
  }) => {
    return (
      <ButWrapp type={type} fullWidth={fullWidth} variant={variant}>
        {icon && <i className={icon} />}
        {label || children}
      </ButWrapp>
    )
  }
)

export default Button
