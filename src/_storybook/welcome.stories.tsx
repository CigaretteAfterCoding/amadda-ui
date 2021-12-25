import React from 'react';
import styled from '@emotion/styled';

export default {
  title: 'Amadda/Welcome',
};

export const Welcome = () => (
  <WelcomeBlock>
    아마따 디자인시스템
  </WelcomeBlock>
);

const WelcomeBlock = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 50px;
`;

Welcome.story = {
  storyName: 'Welcome',
};
