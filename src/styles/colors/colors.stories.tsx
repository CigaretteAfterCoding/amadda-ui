import React from 'react';
import styled from '@emotion/styled';
import colors from './colors';

export default {
  title: 'UI/Color',
};

export const Palette = () => {
  return (
    <Wrapper>
      {Object.entries(colors).map(colorSet => {
        if (colorSet[0] === 'black' || colorSet[0] === 'white') {
          return;
        }

        return (
          <ColorSet key={colorSet[0]}>
            {Object.values(colorSet[1]).map(color => (
              <Color
                key={color}
                color={color}
              />
            ))}
          </ColorSet>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
  min-height: 123px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

const ColorSet = styled.div`
  display: flex;
  gap: 6px;
`;

const Color = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${({ color }) => color };
`;
