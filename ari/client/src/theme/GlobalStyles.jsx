import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import 'normalize.css';
import 'swiper/css/swiper.css';
import superFormReset from './superFormReset';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          font-family: 'Nanum Gothic', sans-serif;
        }
        ${superFormReset};
        html {
          font-size: 62.5%;
        }

        body > * {
          all: unset;
        }

        .main-pagination .swiper-pagination-bullet {
          width: 1.5rem;
          height: 1.5rem;
          &-active {
            background-color: ${theme.colors.main.primary};
          }
        }
        input[type='submit'],
        input[type='reset'] {
        }
        input[disabled],
        textarea[disabled],
        select[disabled='disabled'] {
          -webkit-text-fill-color: rgba(0, 0, 0, 1);
          -webkit-opacity: 1;
          color: rgba(0, 0, 0, 1);
          background: white;
        }
      `}
    />
  );
};
export default GlobalStyles;
