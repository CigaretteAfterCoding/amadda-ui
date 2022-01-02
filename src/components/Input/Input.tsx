import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../..';

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
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      error={error}
    >
      <InputBase
        ref={ref}
        {...testId && { 'data-testid': testId }}
        type={type}
        id={id}
        className={className}
        required={required}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        {...inputProps}
      />
    </InputBlock>
  );
}

type InputBlockProps = Pick<InputProps, 'size' | 'fullWidth' | 'disabled' | 'error'>

const InputBlock = styled.div<InputBlockProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: ${colors.primary[500]};
  color: ${colors.white};

  ${({ fullWidth }) => fullWidth && css`
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    `
  }

  ${({ disabled }) => disabled && css`
      background-color: lightgray;
  `};

  ${({ size }) => {
    switch (size) {
      case 'xlarge':
        return css`
          font-size: 16px;
          width: 160px;
          height: 40px;
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

const InputBase = styled.input``;

export default forwardRef(Input);
