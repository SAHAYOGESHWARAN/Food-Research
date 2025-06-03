import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import '../../styles/components/TutorialsPage.css';

const TutorialsPage = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiEndpoints.tutorials || '/tutorials');
        setTutorials(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load tutorials');
      } finally {
        setLoading(false);
      }
    };
    fetchTutorials();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="tutorials-page">
      <h2>Tutorials</h2>
      <Link to="/tutorials/add" className="add-btn">Add Tutorial</Link>
      {tutorials.length === 0 ? (
        <p>No tutorials found.</p>
      ) : (
        <ul className="tutorials-list">
          {tutorials.map((tutorial) => (
            <li key={tutorial._id} className="tutorials-list-item">
              <Link to={`/tutorials/${tutorial._id}`}>{tutorial.title}</Link>
              <div><strong>Published Date:</strong> {tutorial.publishedDate ? new Date(tutorial.publishedDate).toLocaleDateString() : 'N/A'}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TutorialsPage;
