import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';
import theme from '../../../theme';

const Layout = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr min-content;
  width: 100%;
  margin-top: ${theme.space * 2}px;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: ${theme.space * 2}px auto;
  }
`;

const ContainerLayout = ({ className, children }) => {
  return <Layout className={className}>{children}</Layout>;
};

export default ContainerLayout;
