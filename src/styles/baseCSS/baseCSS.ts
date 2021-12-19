import { css } from '@emotion/react';
import normalizeCSS from './normalizeCSS';

const baseCSS = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    
  }

  ${normalizeCSS};
`;

export default baseCSS;
