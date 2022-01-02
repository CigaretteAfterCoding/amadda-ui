import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from './Input';

export default {
  title: 'UI/Input',
  copmonents: Input,
};

export const Default = () => {
  const [value, setValue] = useState('');

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={handleChangeValue}
      />
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
