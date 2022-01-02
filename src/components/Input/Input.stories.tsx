import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input, { InputSize } from './Input';

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

const SIZES: InputSize[] = ['xlarge', 'large', 'medium', 'small', 'xsmall'];

export const Size = () => {
  const [value, setValue] = useState('');

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      {SIZES.map(size => (
        <Input
          key={size}
          size={size}
          placeholder={size}
          value={value}
          onChange={handleChangeValue}
        />
      ))}
    </Wrapper>
  );
};

export const Disabled = () => {
  return (
    <Wrapper>
      <Input
        placeholder='disabled'
        disabled
      />
    </Wrapper>
  );
};

export const FullWidth = () => {
  const [value, setValue] = useState('');

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      fullWidth
      value={value}
      onChange={handleChangeValue}
    />
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
