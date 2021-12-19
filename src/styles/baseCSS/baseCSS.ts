import { css } from '@emotion/react';
import normalizeCSS from './normalizeCSS';

const baseCSS = css`
  * {
    box-sizing: border-box;
  }

  ${normalizeCSS};
`;

export default baseCSS;
