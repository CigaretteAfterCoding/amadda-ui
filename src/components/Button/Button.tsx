import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../..";

export type ButtonSize = "xlarge" | "large" | "medium" | "small" | "xsmall";

export interface ButtonProps {
  href?: string;
  target?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
}

function Button(
  {
    href,
    fullWidth = false,
    size = "medium",
    disabled = false,
    children,
    ...others
  }: ButtonProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <ButtonBlock
      ref={ref}
      as={href ? "a" : "button"}
      href={href}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      {...others}
    >
      {children}
    </ButtonBlock>
  );
}

type ButtonBlockProps = Partial<ButtonProps>;

const ButtonBlock = styled.div<ButtonBlockProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  background-color: ${colors.primary[500]};
  color: ${colors.white};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: lightgray;
      cursor: not-allowed;
    `};

  ${({ size }) => {
    switch (size) {
      case "xlarge":
        return css`
          font-size: 14px;
          font-weight: bold;
          min-width: 160px;
          height: 40px;
        `;
      case "large":
        return css`
          font-size: 14px;
          font-weight: bold;
          min-width: 140px;
          height: 35px;
        `;
      case "medium":
        return css`
          font-size: 12px;
          min-width: 120px;
          height: 30px;
        `;
      case "small":
        return css`
          font-size: 10px;
          min-width: 100px;
          height: 25px;
        `;
      case "xsmall":
        return css`
          font-size: 8px;
          min-width: 80px;
          height: 20px;
        `;
    }
  }}

  &:hover {
    background-color: ${colors.primary[700]};
  }
`;

export default forwardRef(Button);
