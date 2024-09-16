import styled, { css } from "styled-components";
import { InputProps } from "./Input";

const sizeStyles = {
  sm: css`
    font-size: 12px;
    padding: 6px 10px;
  `,
  md: css`
    font-size: 14px;
    padding: 8px 12px;
  `,
  lg: css`
    font-size: 16px;
    padding: 10px 14px;
  `,
};

const alignmentStyles = {
  left: css`
    text-align: left;
  `,
  right: css`
    text-align: right;
  `,
};

const variantStyles = {
  fill: css`
    background-color: #f0f0f0;
    border: none;
  `,
  outlined: css`
    background-color: #fff;
    border: 1px solid #d1d1d6;
    border-radius: 4px;
  `,
};

const borderStyles = {
  true: css`
    border: 1px solid #ccc;
  `,
  false: css`
    border: none;
  `,
};

export const InputStyled = styled.input<InputProps>`
  ${(props) => sizeStyles[props.size]};
  ${(props) => alignmentStyles[props.alignment]};
  ${(props) => variantStyles[props.variant]};
`;
