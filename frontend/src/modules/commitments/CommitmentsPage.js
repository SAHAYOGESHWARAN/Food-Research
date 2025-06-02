import React, { useEffect, useState } from 'react';
import CommitmentCard from './CommitmentCard';
import Loader from '../../components/Loader';
import useAuth from '../../hooks/useAuth';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';

const CommitmentsPage = () => {
  const { token } = useAuth();
  const [commitments, setCommitments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommitments = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiEndpoints.commitments, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCommitments(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load commitments');
      } finally {
        setLoading(false);
      }
    };
    fetchCommitments();
  }, [token]);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="commitments-page">
      <h2>Company Commitments</h2>
      {commitments.length === 0 ? (
        <p>No commitments found.</p>
      ) : (
        <div className="commitments-list">
          {commitments.map((commitment) => (
            <CommitmentCard key={commitment._id} {...commitment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommitmentsPage;
