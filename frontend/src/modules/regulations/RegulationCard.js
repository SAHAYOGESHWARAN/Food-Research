import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/RegulationCard.css';

const RegulationCard = ({
  regulationName,
  description,
  applicableRegions = [],
  complianceStandards,
  effectiveDate,
  lastUpdated,
  ingredientNames = [],
  productNames = [],
}) => {
  return (
    <div className="regulation-card">
      <h3>{regulationName}</h3>
      <p>{description}</p>
      <div><strong>Regions:</strong> {applicableRegions.join(', ')}</div>
      <div><strong>Compliance Standards:</strong> {complianceStandards}</div>
      <div><strong>Effective Date:</strong> {effectiveDate ? new Date(effectiveDate).toLocaleDateString() : 'N/A'}</div>
      <div><strong>Last Updated:</strong> {lastUpdated ? new Date(lastUpdated).toLocaleDateString() : 'N/A'}</div>
      {ingredientNames.length > 0 && (
        <div><strong>Ingredients:</strong> {ingredientNames.join(', ')}</div>
      )}
      {productNames.length > 0 && (
        <div><strong>Products:</strong> {productNames.join(', ')}</div>
      )}
    </div>
  );
};

RegulationCard.propTypes = {
  regulationName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  applicableRegions: PropTypes.arrayOf(PropTypes.string),
  complianceStandards: PropTypes.string,
  effectiveDate: PropTypes.string,
  lastUpdated: PropTypes.string,
  ingredientNames: PropTypes.arrayOf(PropTypes.string),
  productNames: PropTypes.arrayOf(PropTypes.string),
};

export default RegulationCard;
