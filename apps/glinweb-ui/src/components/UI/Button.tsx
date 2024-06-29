import React from 'react';
import './Button.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children }) => {
  return (
    <button className={`glinweb-btn glinweb-btn--${variant}`}>
      {children}
    </button>
  );
};

export default Button;
