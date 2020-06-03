import React from 'react';

import './styles.css';

type Props = {
  label: string;
  type?: 'button' | 'submit';
  className?: string;
};

const Button: React.FC<Props> = ({ label, type = 'button', className }) => {
  return (
    <button type={type} className={`form-button ${className || ''}`}>
      {label}
    </button>
  );
};

export default Button;
