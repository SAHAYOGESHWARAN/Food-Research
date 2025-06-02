import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';

const MarketInsightsPage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiEndpoints.marketInsights || '/market-insights');
        setTrends(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load market insights');
      } finally {
        setLoading(false);
      }
    };
    fetchTrends();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="market-insights-page">
      <h2>Market Insights</h2>
      {trends.length === 0 ? (
        <p>No market trends found.</p>
      ) : (
        <div className="market-trends-list">
          {trends.map((trend) => (
            <div key={trend._id} className="market-trend-card">
              <h3>{trend.trendName}</h3>
              <p>{trend.description}</p>
              <div><strong>Sector:</strong> {trend.sector}</div>
              <div><strong>Consumer Behavior:</strong> {trend.consumerBehavior}</div>
              <div><strong>Competitive Landscape:</strong> {trend.competitiveLandscape}</div>
              <div><strong>Date Reported:</strong> {trend.dateReported ? new Date(trend.dateReported).toLocaleDateString() : 'N/A'}</div>
              <div><strong>Source:</strong> {trend.source}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketInsightsPage;
