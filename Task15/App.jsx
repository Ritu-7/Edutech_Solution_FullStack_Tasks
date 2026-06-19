import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkBackendConnection = async () => {
      try {
        setLoading(true);
        // Request directly across origins to the backend server
        const response = await axios.get(`${API_BASE_URL}/status`);
        
        if (response.data.success) {
          setStatusMessage(response.data.message);
        }
      } catch (err) {
        // Handle API errors gracefully
        setError(err.response?.data?.message || 'Failed to connect to the backend server.');
      } finally {
        setLoading(false);
      }
    };

    checkBackendConnection();
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#0a0a0c', 
      color: '#00f0ff', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'monospace'
    }}>
      <div style={{
        padding: '30px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #00f0ff',
        boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)'
      }}>
        <h2>Task 15: Full Stack Connection Status</h2>
        
        {loading && <p style={{ color: '#bd00ff' }}>Interrogating backend handshake line...</p>}
        
        {error && (
          <div style={{ color: '#ff0055', border: '1px solid #ff0055', padding: '10px', borderRadius: '4px' }}>
            <strong>[CONNECTION ERROR]:</strong> {error}
          </div>
        )}

        {statusMessage && (
          <p style={{ color: '#00ff66', fontSize: '1.2rem' }}>
            ✔ {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;-