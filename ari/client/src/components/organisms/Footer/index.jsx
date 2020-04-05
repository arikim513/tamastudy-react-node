import React from 'react';
import { css } from '@emotion/core';
import theme from '../../../theme';
import Typo from '../../atoms/Typo';
import mediaQuery from '../../../theme/mediaQuery';

const Footer = () => {
  const typoStyle = css`
    position: relative;
    -webkit-text-fill-color: ${theme.colors.base.white};
    color: ${theme.colors.base.white};
    line-height: 20px;
    &:not(:last-of-type) {
      margin-right: ${theme.space * 2}px;
      &::after {
        position: absolute;
        top: 50%;
        right: -${theme.space}px;
        transform: translateY(-50%);
        content: '';
        width: 1px;
        height: 10px;
        background-color: white;
      }
    }
  `;

  return (
    <div
      css={css`
        box-sizing: border-box;
        width: 100%;
        height: inherit;
        background-color: ${theme.colors.base.darkGrey};
        padding: ${theme.space * 4}px 0;
      `}
    >
      <div
        css={css`
          width: 60%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: ${theme.space * 2}px;
          ${mediaQuery(2)} {
            width: 100%;
          }
        `}
      >
        <Typo css={typoStyle} variant="body3">
          도움말
        </Typo>
        <Typo css={typoStyle} variant="body3">
          이용약관
        </Typo>
        <Typo css={typoStyle} variant="body3">
          개인정보 처리방침
        </Typo>
        <Typo css={typoStyle} variant="body3">
          TS Social Plugins
        </Typo>
        <Typo css={typoStyle} variant="body3">
          TS Creators Market
        </Typo>
        <Typo css={typoStyle} variant="body3">
          TS 로고 사용 가이드
        </Typo>
        <Typo css={typoStyle} variant="body3">
          TS Partners
        </Typo>
        <Typo css={typoStyle} variant="body3">
          TS 블로그
        </Typo>
        <Typo css={typoStyle} variant="body3">
          오시는길
        </Typo>
      </div>

      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Typo
          variant="body1"
          css={css`
            -webkit-text-fill-color: ${theme.colors.base.white};
            color: ${theme.colors.base.white};
          `}
        >
          © <strong>Tamastudy</strong>
        </Typo>
      </div>
    </div>
  );
};

export default Footer;
