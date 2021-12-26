import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  href?: string;
  target?: string;
}

function Button(
  {
    href,
    ...others
  }: ButtonProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <ButtonBlock
      as={href ? 'a' : 'button'}
      href={href}
      ref={ref}
      {...others}
    >
      버튼이에용!
    </ButtonBlock>
  );
}

interface ButtonBlockProps {
  href?: string;
}

const ButtonBlock = styled.div<ButtonBlockProps>`
  background-color: gray;
  color: black;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  text-decoration: none;
   
  &:hover {
    background-color: lightgray;
  }
`;

export default forwardRef(Button);
