import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ show, onClose, message, variant, duration = 5000 }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  return (
    <div className="custom-alert">
      <Alert show={show} variant={variant} onClose={onClose} dismissible>
        {message}
      </Alert>
    </div>
  );
};

export default CustomAlert;
