import React from 'react';
import PropTypes from 'prop-types';
import '../styles/global.css';

const AuthLayout = ({ children }) => (
  <div className="auth-layout">
    <div className="auth-layout__container">
      <header className="auth-layout__header">
        <h1>Food Research Platform</h1>
      </header>
      <main className="auth-layout__main">{children}</main>
      <footer className="auth-layout__footer">
        <small>&copy; {new Date().getFullYear()} Food Research Platform. All rights reserved.</small>
      </footer>
    </div>
  </div>
);

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
