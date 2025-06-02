import React from 'react';
import PropTypes from 'prop-types';
import '../styles/global.css';

const DashboardLayout = ({ children }) => (
  <div className="dashboard-layout">
    <aside className="dashboard-layout__sidebar">
      {/* Sidebar navigation or user menu can go here */}
    </aside>
    <div className="dashboard-layout__main">
      <header className="dashboard-layout__header">
        <h1>Dashboard</h1>
      </header>
      <main className="dashboard-layout__content">{children}</main>
      <footer className="dashboard-layout__footer">
        <small>&copy; {new Date().getFullYear()} Food Research Platform. All rights reserved.</small>
      </footer>
    </div>
  </div>
);

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
