import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import '../../styles/components/StudiesPage.css';

const StudiesPage = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudies = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiEndpoints.studies || '/studies');
        setStudies(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load studies');
      } finally {
        setLoading(false);
      }
    };
    fetchStudies();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="studies-page">
      <h2>Studies</h2>
      <Link to="/studies/add" className="add-btn">Add Study</Link>
      {studies.length === 0 ? (
        <p>No studies found.</p>
      ) : (
        <ul className="studies-list">
          {studies.map((study) => (
            <li key={study._id} className="studies-list-item">
              <Link to={`/studies/${study._id}`}>{study.title}</Link>
              <div><strong>Publication Date:</strong> {study.publicationDate ? new Date(study.publicationDate).toLocaleDateString() : 'N/A'}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default StudiesPage;
