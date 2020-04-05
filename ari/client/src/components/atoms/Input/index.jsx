import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from '../../../theme';

const Container = styled.input`
  width: 100%;
  font-size: 2rem;
  font-weight: 900;
  box-sizing: border-box;
  padding: ${theme.space * 4}px;
  outline: none;
  border: 1px solid ${theme.colors.base.grey};
  margin: ${theme.space}px 0;
`;

const Input = ({
  onChange,
  type = 'text',
  placeholder = 'name',
  value,
  name,
  className,
  ...props
}) => {
  return (
    <Container
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className={className}
      {...props}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
