import React from 'react';

// Button component receiving props for customization
export const Button = ({ label, onClick, variant = 'primary' }) => {
  const baseStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  };

  const themes = {
    primary: { background: '#0070f3', color: '#fff' },
    secondary: { background: '#eaeaea', color: '#333' },
    danger: { background: '#ff0000', color: '#fff' },
  };

  const combinedStyles = { ...baseStyles, ...themes[variant] };

  return (
    <button style={combinedStyles} onClick={onClick}>
      {label}
    </button>
  );
};