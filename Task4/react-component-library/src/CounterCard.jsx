import React, { useState } from 'react';
import { Button } from './Button';

export const CounterCard = ({ title }) => {
  // 1. Initialize State
  const [count, setCount] = useState(0);

  // 2. State Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Card Styles
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={cardStyle}>
      {/* Prop usage */}
      <h3>{title}</h3> 
      
      {/* State usage */}
      <h1 style={{ fontSize: '48px', margin: '20px 0' }}>{count}</h1>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Button label="-" onClick={decrement} variant="secondary" />
        <Button label="Reset" onClick={reset} variant="danger" />
        <Button label="+" onClick={increment} variant="primary" />
      </div>
    </div>
  );
};