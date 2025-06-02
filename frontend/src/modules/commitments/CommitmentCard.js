import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/CommitmentCard.css';

const CommitmentCard = ({
  commitmentType,
  description,
  startDate,
  endDate,
  progressReports = [],
  companyName,
  productNames = [],
  ingredientNames = [],
}) => {
  return (
    <div className="commitment-card">
      <div className="commitment-card__header">
        <h3>{commitmentType}</h3>
        {companyName && <span className="commitment-card__company">{companyName}</span>}
      </div>
      <div className="commitment-card__body">
        <p className="commitment-card__description">{description}</p>
        <div className="commitment-card__dates">
          <span>Start: {startDate ? new Date(startDate).toLocaleDateString() : 'N/A'}</span>
          {endDate && <span>End: {new Date(endDate).toLocaleDateString()}</span>}
        </div>
        {productNames.length > 0 && (
          <div className="commitment-card__products">
            <strong>Products:</strong> {productNames.join(', ')}
          </div>
        )}
        {ingredientNames.length > 0 && (
          <div className="commitment-card__ingredients">
            <strong>Ingredients:</strong> {ingredientNames.join(', ')}
          </div>
        )}
        {progressReports.length > 0 && (
          <div className="commitment-card__progress">
            <strong>Progress Reports:</strong>
            <ul>
              {progressReports.map((report, idx) => (
                <li key={idx}>
                  {report.startsWith('http') ? (
                    <a href={report} target="_blank" rel="noopener noreferrer">Report {idx + 1}</a>
                  ) : (
                    report
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

CommitmentCard.propTypes = {
  commitmentType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  progressReports: PropTypes.arrayOf(PropTypes.string),
  companyName: PropTypes.string,
  productNames: PropTypes.arrayOf(PropTypes.string),
  ingredientNames: PropTypes.arrayOf(PropTypes.string),
};

export default CommitmentCard;
