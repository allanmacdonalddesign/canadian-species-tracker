import React, { useState, useEffect } from 'react';
import { MapPin, Leaf, Shield, RefreshCw, AlertCircle } from 'lucide-react';
import ProvinceSelector from './components/ProvinceSelector';
import SpeciesCard from './components/SpeciesCard';
import ConservationTrends from './components/ConservationTrends';
import apiService from './services/apiService';
import { CANADIAN_PROVINCES } from './data/provinces';

/**
 * Main App Component
 * Canadian Endangered Species Tracker - Main application component
 * Manages province selection, loading states, and displays species data and conservation trends
 */
function App() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [loading, setLoading] = useState(false);
  const [speciesData, setSpeciesData] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  /**
   * Handles province selection change
   * Fetches live data from conservation APIs
   * @param {string} provinceCode - The code of the selected province
   */
  const handleProvinceChange = async (provinceCode) => {
    if (!provinceCode) {
      setSelectedProvince('');
      setSpeciesData(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    setSelectedProvince(provinceCode);
    
    try {
      const data = await apiService.getSpeciesData(provinceCode);
      setSpeciesData(data);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Failed to fetch species data:', err);
      setError(`Failed to load species data: ${err.message}`);
      setSpeciesData(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Refreshes data for the currently selected province
   * Clears cache and fetches fresh data from APIs
   */
  const handleRefresh = async () => {
    if (!selectedProvince) return;
    
    apiService.clearCache();
    await handleProvinceChange(selectedProvince);
  };

  /**
   * Gets the full province name from province code
   * @param {string} code - The province code to look up
   * @returns {string} The full province name or empty string if not found
   */
  const getProvinceName = (code) => {
    const province = CANADIAN_PROVINCES.find(p => p.code === code);
    return province ? province.name : '';
  };

  // Auto-refresh data every 30 minutes to ensure live data
  useEffect(() => {
    if (!selectedProvince) return;

    const interval = setInterval(() => {
      handleRefresh();
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(interval);
  }, [selectedProvince]);

  return (
    <div className="container">
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <MapPin className="w-12 h-12" style={{ color: 'white' }} />
          <h1>Canadian Endangered Species Tracker</h1>
          <Leaf className="w-12 h-12" style={{ color: 'white' }} />
        </div>
        <p>
          Explore live endangered species data and conservation trends across Canada's provinces and territories. 
          Discover the top 5 most at-risk species in each region with real-time data from conservation databases.
        </p>
      </header>

      <div className="card">
        <ProvinceSelector 
          selectedProvince={selectedProvince}
          onProvinceChange={handleProvinceChange}
        />
      </div>

      {loading && (
        <div className="card">
          <div className="loading">
            <Shield className="w-8 h-8" style={{ margin: '0 auto 1rem', color: '#667eea' }} />
            <div style={{ textAlign: 'center' }}>
              <p>Loading live species data for {getProvinceName(selectedProvince)}...</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
                Fetching from conservation databases...
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="card">
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            color: '#dc3545',
            background: '#f8d7da',
            borderRadius: '8px',
            border: '1px solid #f5c6cb'
          }}>
            <AlertCircle className="w-8 h-8" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem', color: '#721c24' }}>Data Loading Error</h3>
            <p style={{ marginBottom: '1rem' }}>{error}</p>
            <button 
              onClick={handleRefresh}
              style={{
                background: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                margin: '0 auto'
              }}
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </button>
          </div>
        </div>
      )}

      {!loading && selectedProvince && speciesData && (
        <>
          <div className="card">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ 
                color: '#333', 
                fontSize: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                margin: 0
              }}>
                <MapPin className="w-6 h-6" style={{ color: '#667eea' }} />
                Top 5 Endangered Species in {getProvinceName(selectedProvince)}
              </h2>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {lastUpdated && (
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: '#6c757d',
                    margin: 0
                  }}>
                    Last updated: {lastUpdated.toLocaleTimeString()}
                  </p>
                )}
                <button 
                  onClick={handleRefresh}
                  style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                  title="Refresh data from live sources"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {speciesData.species.length > 0 ? (
              <div className="species-grid">
                {speciesData.species.slice(0, 5).map((species, index) => (
                  <SpeciesCard key={index} species={species} />
                ))}
              </div>
            ) : (
              <div className="error">
                No species data available for this province. Please try another province.
              </div>
            )}
          </div>

          {speciesData.trends && (
            <ConservationTrends 
              trends={speciesData.trends} 
              provinceName={getProvinceName(selectedProvince)}
            />
          )}
        </>
      )}

      {!loading && !selectedProvince && (
        <div className="card">
          <div style={{ textAlign: 'center', padding: '3rem', color: '#6c757d' }}>
            <Shield className="w-16 h-16" style={{ margin: '0 auto 1rem', color: '#667eea' }} />
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Welcome to the Canadian Endangered Species Tracker</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Select a province or territory from the dropdown above to explore live endangered species 
              data and conservation trends in that region. Get real-time information about the top 5 most 
              at-risk species and discover current conservation efforts from official databases.
            </p>
            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              background: '#f8f9fa', 
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <h4 style={{ marginBottom: '1rem', color: '#333' }}>Data Sources:</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#6c757d' }}>
                <li style={{ marginBottom: '0.5rem' }}>• COSEWIC (Committee on the Status of Endangered Wildlife in Canada)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Canadian Species at Risk Act (SARA)</li>
                <li style={{ marginBottom: '0.5rem' }}>• NatureServe Explorer</li>
                <li style={{ marginBottom: '0.5rem' }}>• Provincial Conservation Data Centres</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
