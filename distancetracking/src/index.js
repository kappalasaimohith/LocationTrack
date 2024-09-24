import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'; 
import axios from 'axios';

const DistanceMatrixTracker = () => {
  const [origin, setOrigin] = useState('Agra');
  const [destination, setDestination] = useState('New Delhi');
  const [distanceData, setDistanceData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDistanceMatrix = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = ''; // Your Distance Matrix API key
      const response = await axios.get('https://api.distancematrix.ai/maps/api/distancematrix/json', {
        params: {
          origins: origin,
          destinations: destination,
          key: apiKey,
        },
      });

      if (response.data.status === 'OK') {
        setDistanceData(response.data);
      } else {
        throw new Error('Failed to fetch distance data');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Distance Matrix Tracker</h1>
      
      <div className="input-group">
        <label>Origin (place name)</label>
        <input 
          type="text" 
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="e.g., Chapel, London"
        />
      </div>
      
      <div className="input-group">
        <label>Destination (place name)</label>
        <input 
          type="text" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="e.g., Westminster Abbey, London"
        />
      </div>

      <button onClick={fetchDistanceMatrix} className="fetch-button">
        Get Distance
      </button>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {distanceData && (
        <div className="result">
          <h2>From: {distanceData.origin_addresses[0]}</h2>
          <h2>To: {distanceData.destination_addresses[0]}</h2>
          <h3>Status: {distanceData.rows[0].elements[0].status}</h3>
          {distanceData.rows[0].elements[0].status === 'OK' ? (
            <div>
              <p><strong>Distance:</strong> {distanceData.rows[0].elements[0].distance.text}</p>
              <p><strong>Duration:</strong> {distanceData.rows[0].elements[0].duration.text}</p>
            </div>
          ) : (
            <p>No distance data available</p>
          )}
        </div>
      )}
    </div>
  );
};

// Render the component
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<DistanceMatrixTracker />);
