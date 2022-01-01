import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { ButtonSize } from '.';

export default {
  title: 'UI/Button',
  copmonents: Button,
};

export const Default = () => {
  return (
    <Wrapper>
      <Button>
        기본 버튼
      </Button>
    </Wrapper>
  );
};

const SIZES: ButtonSize[] = ['xlarge', 'large', 'medium', 'small', 'xsmall'];

export const Size = () => {
  return (
    <Wrapper>
      {SIZES.map(size => (
        <Button
          key={size}
          size={size}
        >
        버튼 {size}
        </Button >
      ))}
    </Wrapper>
  );
};

export const Disabled = () => {
  return (
    <Wrapper>
      <Button disabled>
        버튼 disabled
      </Button>
    </Wrapper>
  );
};

export const Fullwidth = () => {
  return (
    <Wrapper>
      <Button fullWidth>
        버튼 Fullwidth
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  min-height: 123px;
  gap: 10px;
`;
