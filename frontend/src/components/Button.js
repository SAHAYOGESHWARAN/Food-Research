import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type = 'button', children, onClick, disabled, className, ...props }) => {
  return (
    <button
      type={type}
      className={`custom-btn${className ? ' ' + className : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
