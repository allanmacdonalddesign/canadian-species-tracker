import React from 'react';
import { AlertTriangle, TrendingDown, Shield } from 'lucide-react';

/**
 * SpeciesCard Component
 * Displays individual species information including status, population, and threats
 * Shows species name, scientific name, conservation status, and main threats
 */
const SpeciesCard = ({ species }) => {
  /**
   * Returns color code based on species conservation status
   * @param {string} status - The conservation status of the species
   * @returns {string} Hex color code for the status
   */
  const getStatusColor = (status) => {
    if (!status) return '#6c757d';
    
    const statusLower = status.toLowerCase();
    
    // Check for conservation status keywords
    if (statusLower.includes('presumed extirpated') || statusLower.includes('possibly extirpated')) {
      return '#8b0000'; // Dark red
    }
    if (statusLower.includes('critically imperiled') || statusLower.includes('imperiled')) {
      return '#dc3545'; // Red - Endangered equivalent
    }
    if (statusLower.includes('vulnerable')) {
      return '#fd7e14'; // Orange - Threatened equivalent
    }
    if (statusLower.includes('apparently secure') || statusLower.includes('secure')) {
      return '#28a745'; // Green - Secure
    }
    if (statusLower.includes('unrankable') || statusLower.includes('unranked') || statusLower.includes('unknown')) {
      return '#6c757d'; // Gray - Unknown
    }
    
    // Legacy status support
    if (statusLower === 'endangered') {
      return '#dc3545';
    }
    if (statusLower === 'threatened') {
      return '#fd7e14';
    }
    if (statusLower === 'special concern') {
      return '#ffc107';
    }
    
    return '#6c757d'; // Default gray
  };

  /**
   * Returns appropriate icon based on population status
   * @param {string} population - The population description text
   * @returns {JSX.Element} TrendingDown or Shield icon based on population status
   */
  const getPopulationIcon = (population) => {
    if (population.toLowerCase().includes('declining') || population.toLowerCase().includes('critically')) {
      return <TrendingDown className="w-4 h-4" />;
    }
    return <Shield className="w-4 h-4" />;
  };

  return (
    <div className="species-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <AlertTriangle className="w-5 h-5" style={{ color: getStatusColor(species.status) }} />
        <h3>{species.name}</h3>
      </div>
      
      <p className="scientific-name">{species.scientificName}</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span 
          className="status" 
          style={{ backgroundColor: getStatusColor(species.status) }}
        >
          {species.status}
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#6c757d' }}>
          {getPopulationIcon(species.population)}
          <span style={{ fontSize: '0.9rem' }}>{species.population}</span>
        </div>
      </div>
      
      <p className="description">{species.description}</p>
      
      {species.threats && species.threats.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <strong style={{ color: '#dc3545', fontSize: '0.9rem' }}>Main Threats:</strong>
          <div style={{ marginTop: '0.3rem' }}>
            {species.threats.map((threat, index) => (
              <span 
                key={index}
                style={{
                  display: 'inline-block',
                  background: '#f8d7da',
                  color: '#721c24',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  margin: '0.2rem 0.3rem 0.2rem 0',
                  border: '1px solid #f5c6cb'
                }}
              >
                {threat}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeciesCard;
