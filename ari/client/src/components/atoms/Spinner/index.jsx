import React from 'react';
import MDSpinner from 'react-md-spinner';
import { css } from '@emotion/core';
import theme from '../../../theme';

const Spinner = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <MDSpinner size={70} singleColor={theme.colors.base.black} />
    </div>
  );
};

export default Spinner;
