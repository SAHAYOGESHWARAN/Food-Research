import React from 'react';
import './Loader.css';

const Loader = ({ size = 48, color = '#317EFB', className = '' }) => (
  <div className={`loader-container${className ? ' ' + className : ''}`}> 
    <div
      className="loader"
      style={{ width: size, height: size, borderColor: color + ' transparent ' + color + ' transparent' }}
    />
  </div>
);

export default Loader;
