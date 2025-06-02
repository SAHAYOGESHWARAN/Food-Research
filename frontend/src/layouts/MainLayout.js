import React from 'react';
import PropTypes from 'prop-types';
import '../styles/global.css';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <header className="main-layout__header">
      <h1>Food Research Platform</h1>
      {/* Add navigation or branding here if needed */}
    </header>
    <main className="main-layout__content">{children}</main>
    <footer className="main-layout__footer">
      <small>&copy; {new Date().getFullYear()} Food Research Platform. All rights reserved.</small>
    </footer>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
