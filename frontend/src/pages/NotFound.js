import React from 'react';
import MainLayout from '../layouts/MainLayout';

const NotFound = () => (
  <MainLayout>
    <div className="not-found-page">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <a href="/">Go to Home</a>
    </div>
  </MainLayout>
);

export default NotFound;
