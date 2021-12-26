import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface ButtonProps {
  href?: string;
  target?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
}

function Button(
  {
    href,
    fullWidth = false,
    size = 'medium',
    ...others
  }: ButtonProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <ButtonBlock
      ref={ref}
      as={href ? 'a' : 'button'}
      href={href}
      fullWidth={fullWidth}
      size={size}
      {...others}
    >
      버튼이에용!
    </ButtonBlock>
  );
}

type ButtonBlockProps = Partial<ButtonProps>;

const ButtonBlock = styled.div<ButtonBlockProps>`
  background-color: gray;
  color: black;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  text-decoration: none;

  ${({ fullWidth }) => fullWidth
    && css`
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    `
  }

  ${({ size }) => {
    switch (size) {
      case 'xsmall':
        return css`
          font-size: 40px;
        `;
    }
  }
  }
   
  &:hover {
    background-color: lightgray;
  }
`;

export default forwardRef(Button);
