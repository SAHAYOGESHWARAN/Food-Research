import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import Loader from '../../components/Loader';
import '../../styles/components/TutorialsPage.css';

const AddTutorialPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    difficultyLevel: '',
    publishedDate: '',
    duration: '',
    link: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post(apiEndpoints.tutorials, form);
      navigate('/tutorials');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add tutorial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-tutorial-page">
      <h2>Add Tutorial</h2>
      <form onSubmit={handleSubmit} className="tutorial-form">
        <label>Title<input name="title" value={form.title} onChange={handleChange} required /></label>
        <label>Description<textarea name="description" value={form.description} onChange={handleChange} required /></label>
        <label>Category<input name="category" value={form.category} onChange={handleChange} /></label>
        <label>Difficulty Level<input name="difficultyLevel" value={form.difficultyLevel} onChange={handleChange} /></label>
        <label>Published Date<input type="date" name="publishedDate" value={form.publishedDate} onChange={handleChange} /></label>
        <label>Duration<input name="duration" value={form.duration} onChange={handleChange} /></label>
        <label>Link<input name="link" value={form.link} onChange={handleChange} /></label>
        {error && (<div className="error-message">{error}</div>)}
        <button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Add Tutorial'}</button>
      </form>
    </div>
  );
};
export default AddTutorialPage;
