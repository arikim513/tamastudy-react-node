import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../../theme';

const Container = styled.button`
  width: 100%;
  padding: ${theme.space * 3}px 0;
  margin: ${theme.space}px 0;
  border: 0;
  color: ${theme.colors.base.white};
  background-color: ${theme.colors.main.primary};
  cursor: pointer;
`;

const Submit = ({ btnText, disabled, className, onClick, ...props }) => {
  return (
    <Container
      type={'submit'}
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...props}
    >
      {btnText}
    </Container>
  );
};

Submit.propTypes = {
  btnText: PropTypes.string.isRequired,
  disabled: PropTypes.any,
  className: PropTypes.string,
};

export default Submit;
