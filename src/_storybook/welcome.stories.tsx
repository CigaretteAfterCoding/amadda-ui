/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

const WelcomeBlock = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 50px;
`;

export default {
  title: 'Amadda/Welcome',
};

export const Welcome = () => (
  <WelcomeBlock>
    아마따 디자인시스템
  </WelcomeBlock>
);

Welcome.story = {
  storyName: 'Welcome',
};
