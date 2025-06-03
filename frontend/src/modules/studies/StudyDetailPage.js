import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import '../../styles/components/StudiesPage.css';

const StudyDetailPage = () => {
  const { id } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudy = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${apiEndpoints.studies}/${id}`);
        setStudy(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load study details');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchStudy();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;
  if (!study) return <div>Study not found.</div>;

  return (
    <div className="study-detail-page">
      <h2>{study.title}</h2>
      <div><strong>Abstract:</strong> {study.abstract}</div>
      <div><strong>Keywords:</strong> {study.keywords?.join(', ')}</div>
      <div><strong>Publication Date:</strong> {study.publicationDate ? new Date(study.publicationDate).toLocaleDateString() : 'N/A'}</div>
      <div><strong>Authors:</strong> {study.authors?.join(', ')}</div>
      <div><strong>Link:</strong> {study.link ? <a href={study.link} target="_blank" rel="noopener noreferrer">View Study</a> : 'N/A'}</div>
    </div>
  );
};
export default StudyDetailPage;
