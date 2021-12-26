import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';

export default {
  title: 'UI/Button',
  copmonents: Button,
};

export const Default = () => {
  return (
    <Wrapper>
      <Button
        href="https://www.naver.com"
        target='_blank'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
  min-height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
