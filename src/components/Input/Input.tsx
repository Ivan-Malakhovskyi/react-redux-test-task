import { FC } from "react";
import { InputStyled } from "./Input.styled";

export interface InputProps {
  width: number;
  height: number;
  type: "text" | "number" | "password";
  size: "sm" | "md" | "lg";
  alignment: "left" | "right";
  border: boolean;
  label: boolean;
  labelPosition: "top" | "side";
  variant: "fill" | "outlined";
  iconAfter: boolean;
  iconBefore: boolean;
  shortkey: boolean;
}

export const Input: FC<InputProps> = ({
  width,
  height,
  type = "text",
  size = "sm",
  alignment = "left",
  label = false,
  labelPosition = "top",
  border = true,
  variant = "outlined",
  iconBefore = false,
  iconAfter = false,
  shortkey = false,
  ...props
}) => {
  return (
    <InputStyled
      width={width}
      height={height}
      type={type}
      size={size}
      alignment={alignment}
      label={label}
      labelPosition={labelPosition}
      border={border}
      variant={variant}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      shortkey={shortkey}
      {...props}
    />
  );
};
