import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

// Fix: always render modal for Dashboard usage (Dashboard controls open/close)
const Modal = ({ isOpen, onClose, title, children, className = '' }) => {
  return (
    <div className={`modal-backdrop${className ? ' ' + className : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {title && <div className="modal-header"><h2>{title}</h2><button className="modal-close-btn" onClick={onClose}>&times;</button></div>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Modal;
