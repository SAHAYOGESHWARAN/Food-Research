import React, { useEffect, useState } from 'react';
import RegulationCard from './RegulationCard';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';

const RegulationsPage = () => {
  const [regulations, setRegulations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegulations = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiEndpoints.regulations);
        setRegulations(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load regulations');
      } finally {
        setLoading(false);
      }
    };
    fetchRegulations();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="regulations-page">
      <h2>Regulations</h2>
      {regulations.length === 0 ? (
        <p>No regulations found.</p>
      ) : (
        <div className="regulations-list">
          {regulations.map((regulation) => (
            <RegulationCard key={regulation._id} {...regulation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RegulationsPage;
