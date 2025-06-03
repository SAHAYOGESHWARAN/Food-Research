import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import '../../styles/components/TutorialsPage.css';

const TutorialDetailPage = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorial = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${apiEndpoints.tutorials}/${id}`);
        setTutorial(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load tutorial details');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchTutorial();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;
  if (!tutorial) return <div>Tutorial not found.</div>;

  return (
    <div className="tutorial-detail-page">
      <h2>{tutorial.title}</h2>
      <div><strong>Description:</strong> {tutorial.description}</div>
      <div><strong>Category:</strong> {tutorial.category}</div>
      <div><strong>Difficulty Level:</strong> {tutorial.difficultyLevel}</div>
      <div><strong>Published Date:</strong> {tutorial.publishedDate ? new Date(tutorial.publishedDate).toLocaleDateString() : 'N/A'}</div>
      <div><strong>Duration:</strong> {tutorial.duration}</div>
      <div><strong>Link:</strong> {tutorial.link ? <a href={tutorial.link} target="_blank" rel="noopener noreferrer">View Tutorial</a> : 'N/A'}</div>
    </div>
  );
};
export default TutorialDetailPage;
