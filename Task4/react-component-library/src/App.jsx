import React from 'react';
import { CounterCard } from './CounterCard';

function App() {
  const containerStyle = {
    display: 'flex',
    gap: '20px',
    padding: '40px',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    minHeight: '100vh',
  };

  return (
    <div style={containerStyle}>
      {/* Reusing the same component architecture with different initial props */}
      <CounterCard title="Production Counter" />
      <CounterCard title="Defect Tracker" />
    </div>
  );
}

export default App;