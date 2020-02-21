import { css } from '@emotion/core';
import { GHeaderLinkMapping } from '../../atoms/Links/LinkMapping';
import { ReactComponent as Logo } from '../../../img/logo/nike-logo@logotyp.us.svg';
import React, { useState, useMemo } from 'react';
import Links from '../../atoms/Links';
import SideNav from '../SideNav';

const GlobalHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 리랜더링이 일어날때 key를 계산하여 map을 실행시키는 함수를 기억하여, (memoization)
  // 계속 실행되는 것을 방지 -> 퍼포먼스 상승
  // 만약 이게 100초가 걸리는 함수라면 ? 라고 생각하면 편함.
  const renderLinks = useMemo(() => {
    console.log('I am a renderLinks!!!!'); // 최초 1번만 랜더링되는지 확인용
    const LinkKeys = Object.keys(GHeaderLinkMapping);
    return LinkKeys.map((title) => (
      <Links
        key={title}
        linkTitle={title}
        linkTo={GHeaderLinkMapping[title]}
        css={css`
          &:not(:last-of-type) {
            margin-right: 10px;
          }
        `}
      />
    ));
  }, []);

  return (
    <>
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 20px 20px 20px 0;
        `}
      >
        <div
          onClick={() => setIsModalOpen(true)}
          css={css`
            width: 100px;
            cursor: pointer;
          `}
        >
          <Logo />
        </div>
        <nav
          css={css`
            display: flex;
          `}
        >
          {renderLinks}
        </nav>
      </header>
      <SideNav isModalOpen={isModalOpen} onClickBackdrop={() => setIsModalOpen(false)} />
    </>
  );
};

export default GlobalHeader;
