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
  background-color: ${(props) => (props.bgColor ? props.bgColor : theme.colors.main.primary)};
  cursor: pointer;
`;

const FormButton = ({ btnText, disabled, className, onClick, bgColor, ...props }) => {
  return (
    <Container
      disabled={disabled}
      className={className}
      onClick={onClick}
      bgColor={bgColor}
      {...props}
    >
      {btnText}
    </Container>
  );
};

FormButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  disabled: PropTypes.any,
  className: PropTypes.string,
};

export default FormButton;
