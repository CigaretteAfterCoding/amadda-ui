import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type InputSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export interface InputProps {
  testId?: string,
  type?: string;
  fullWidth?: boolean;
  size?: InputSize;
  name?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  error?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(
  {
    testId,
    size = 'medium',
    type = 'text',
    fullWidth = false,
    name,
    placeholder,
    id,
    className,
    disabled = false,
    required = false,
    value = '',
    error = false,
    inputProps = {},
    onChange,
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <InputBlock
      ref={ref}
      {...testId && { 'data-testid': testId }}
      inputSize={size}
      type={type}
      fullWidth={fullWidth}
      id={id}
      className={className}
      required={required}
      placeholder={placeholder}
      value={value}
      name={name}
      disabled={disabled}
      error={error}
      onChange={onChange}
      {...inputProps}
    />
  );
}

interface InputBlockProps {
  inputSize: InputSize;
  fullWidth: boolean;
  error: boolean;
}

const InputBlock = styled.input<InputBlockProps>`
  width: 100%;
  border-radius: 4px;
  border: 1px solid red;

  ${({ fullWidth }) => fullWidth && css`
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    `
  }

  ${({ disabled }) => disabled && css`
      background-color: lightgray;
  `};

  ${({ inputSize }) => {
    switch (inputSize) {
      case 'xlarge':
        return css`
          font-size: 16px;
          width: 160px;
          height: 40px;
          padding: 4px;
        `;
      case 'large':
        return css`
          font-size: 14px;
          width: 140px;
          height: 35px;
        `;
      case 'medium':
        return css`
          font-size: 12px;
          width: 120px;
          height: 30px;
          padding: 14px;
        `;
      case 'small':
        return css`
          font-size: 10px;
          width: 100px;
          height: 25px;
        `;
      case 'xsmall':
        return css`
          font-size: 8px;
          width: 80px;
          height: 20px;
        `;
    }
  }
  }
`;

export default forwardRef(Input);
