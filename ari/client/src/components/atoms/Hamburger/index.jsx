import React from 'react';
import { css } from '@emotion/core';
import theme from '../../../theme';

const Hamburger = ({ onClick }) => {
  const containerStyles = css`
    margin-right: ${theme.space * 2 - 4}px;
  `;
  const hamburgerStyles = css`
    margin: 1em;
    width: 26px;
    cursor: pointer;

    &:after,
    &:before,
    & div {
      background-color: #000;
      border-radius: 3px;
      content: '';
      display: block;
      height: 3px;
      margin: 5px 0;
      transition: all 0.2s ease-in-out;
    }

    &:hover:before {
      transform: rotate(-7deg);
    }

    &:hover div {
      transform: rotate(7deg);
    }

    &:hover:after {
      transform: rotate(-7deg);
    }
  `;

  return (
    <div css={containerStyles}>
      <div css={hamburgerStyles} onClick={onClick}>
        <div></div>
      </div>
    </div>
  );
};

export default Hamburger;
