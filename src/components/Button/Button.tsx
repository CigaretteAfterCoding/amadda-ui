import React from 'react';
import styled from '@emotion/styled';

function Button() {
  return (
    <ButtonBlock>
      버튼이에용
    </ButtonBlock>
  );
}

const ButtonBlock = styled.div`
  background-color: gray;
  cursor: pointer;
  padding: 10px;
   
  &:hover {
    background-color: lightgray;
  }
`;

export default Button;
