import React from 'react';
import { CANADIAN_PROVINCES } from '../data/provinces';

/**
 * ProvinceSelector Component
 * Dropdown component for selecting Canadian provinces and territories
 * Displays all provinces from the CANADIAN_PROVINCES data and handles selection changes
 */
const ProvinceSelector = ({ selectedProvince, onProvinceChange }) => {
  return (
    <div className="province-selector">
      <label htmlFor="province-select">Select a Province or Territory:</label>
      <select
        id="province-select"
        value={selectedProvince}
        onChange={(e) => onProvinceChange(e.target.value)}
      >
        <option value="">Choose a province or territory...</option>
        {CANADIAN_PROVINCES.map((province) => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceSelector;
