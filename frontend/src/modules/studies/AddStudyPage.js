import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import Loader from '../../components/Loader';
import '../../styles/components/StudiesPage.css';

const AddStudyPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    abstract: '',
    keywords: '',
    publicationDate: '',
    authors: '',
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
      await axios.post(apiEndpoints.studies, {
        ...form,
        keywords: form.keywords.split(',').map(k => k.trim()),
        authors: form.authors.split(',').map(a => a.trim())
      });
      navigate('/studies');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add study');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-study-page">
      <h2>Add Study</h2>
      <form onSubmit={handleSubmit} className="study-form">
        <label>Title<input name="title" value={form.title} onChange={handleChange} required /></label>
        <label>Abstract<textarea name="abstract" value={form.abstract} onChange={handleChange} required /></label>
        <label>Keywords (comma separated)<input name="keywords" value={form.keywords} onChange={handleChange} /></label>
        <label>Publication Date<input type="date" name="publicationDate" value={form.publicationDate} onChange={handleChange} /></label>
        <label>Authors (comma separated)<input name="authors" value={form.authors} onChange={handleChange} /></label>
        <label>Link<input name="link" value={form.link} onChange={handleChange} /></label>
        {error && (<div className="error-message">{error}</div>)}
        <button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Add Study'}</button>
      </form>
    </div>
  );
};
export default AddStudyPage;
