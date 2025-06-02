import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/MarketTrendCard.css';

const MarketTrendCard = ({
  trendName,
  description,
  sector,
  consumerBehavior,
  competitiveLandscape,
  dateReported,
  source,
}) => {
  return (
    <div className="market-trend-card">
      <h3>{trendName}</h3>
      <p>{description}</p>
      <div><strong>Sector:</strong> {sector}</div>
      <div><strong>Consumer Behavior:</strong> {consumerBehavior}</div>
      <div><strong>Competitive Landscape:</strong> {competitiveLandscape}</div>
      <div><strong>Date Reported:</strong> {dateReported ? new Date(dateReported).toLocaleDateString() : 'N/A'}</div>
      <div><strong>Source:</strong> {source}</div>
    </div>
  );
};

MarketTrendCard.propTypes = {
  trendName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sector: PropTypes.string,
  consumerBehavior: PropTypes.string,
  competitiveLandscape: PropTypes.string,
  dateReported: PropTypes.string,
  source: PropTypes.string,
};

export default MarketTrendCard;
