import React from 'react';
import { TrendingUp, TrendingDown, Shield, MapPin } from 'lucide-react';

/**
 * ConservationTrends Component
 * Displays conservation statistics and trends for a selected province
 * Shows population changes, species at risk, recovery programs, and protected areas
 */
const ConservationTrends = ({ trends, provinceName }) => {
  /**
   * Formats percentage values with appropriate sign (+ or -)
   * @param {number} value - The percentage value to format
   * @returns {string} Formatted percentage string with sign
   */
  const formatPercentage = (value) => {
    return value < 0 ? `${value}%` : `+${value}%`;
  };

  /**
   * Returns appropriate trend icon based on value (up or down arrow)
   * @param {number} value - The trend value to determine icon
   * @returns {JSX.Element} TrendingUp or TrendingDown icon component
   */
  const getTrendIcon = (value) => {
    return value < 0 ? <TrendingDown className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />;
  };

  return (
    <div className="trends-section">
      <h2>Conservation Trends in {provinceName}</h2>
      <p style={{ opacity: 0.9, marginBottom: '1rem' }}>
        Overview of species conservation efforts and population trends in {provinceName}
      </p>
      
      <div className="trends-grid">
        <div className="trend-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {getTrendIcon(trends.overallDecline)}
            <h3>Overall Population Change</h3>
          </div>
          <div className="stat" style={{ color: trends.overallDecline < 0 ? '#ff6b6b' : '#51cf66' }}>
            {formatPercentage(trends.overallDecline)}
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            Since 1970
          </p>
        </div>
        
        <div className="trend-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Shield className="w-6 h-6" />
            <h3>Species at Risk</h3>
          </div>
          <div className="stat">{trends.speciesAtRisk}</div>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            Listed species
          </p>
        </div>
        
        <div className="trend-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <TrendingUp className="w-6 h-6" />
            <h3>Recovery Programs</h3>
          </div>
          <div className="stat">{trends.recoveryPrograms}</div>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            Active programs
          </p>
        </div>
        
        <div className="trend-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <MapPin className="w-6 h-6" />
            <h3>Protected Areas</h3>
          </div>
          <div className="stat">{trends.protectedAreas}%</div>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            Of province area
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Conservation Insights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div>
            <h4 style={{ marginBottom: '0.5rem', color: '#51cf66' }}>Positive Developments</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.3rem' }}>• Recovery programs showing success</li>
              <li style={{ marginBottom: '0.3rem' }}>• Increased protected area coverage</li>
              <li style={{ marginBottom: '0.3rem' }}>• Community conservation initiatives</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.5rem', color: '#ff6b6b' }}>Key Challenges</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.3rem' }}>• Habitat loss and fragmentation</li>
              <li style={{ marginBottom: '0.3rem' }}>• Climate change impacts</li>
              <li style={{ marginBottom: '0.3rem' }}>• Invasive species threats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConservationTrends;
