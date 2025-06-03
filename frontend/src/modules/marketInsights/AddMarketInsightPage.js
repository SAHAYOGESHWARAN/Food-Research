import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import Loader from '../../components/Loader';
import '../../styles/components/MarketTrendCard.css';
import '../../styles/components/AddMarketInsightPage.css';

const AddMarketInsightPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    trendName: '',
    description: '',
    sector: '',
    consumerBehavior: '',
    competitiveLandscape: '',
    dateReported: '',
    source: ''
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
      await axios.post(apiEndpoints.marketInsights || '/market-insights', form);
      navigate('/market-insights');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add market insight');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-market-insight-page">
      <h2>Add Market Insight</h2>
      <form onSubmit={handleSubmit} className="market-insight-form">
        <label>Trend Name<input name="trendName" value={form.trendName} onChange={handleChange} required /></label>
        <label>Description<textarea name="description" value={form.description} onChange={handleChange} required /></label>
        <label>Sector<input name="sector" value={form.sector} onChange={handleChange} /></label>
        <label>Consumer Behavior<input name="consumerBehavior" value={form.consumerBehavior} onChange={handleChange} /></label>
        <label>Competitive Landscape<input name="competitiveLandscape" value={form.competitiveLandscape} onChange={handleChange} /></label>
        <label>Date Reported<input type="date" name="dateReported" value={form.dateReported} onChange={handleChange} /></label>
        <label>Source<input name="source" value={form.source} onChange={handleChange} /></label>
        {error && (<div className="error-message">{error}</div>)}
        <button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Add Market Insight'}</button>
      </form>
    </div>
  );
};
export default AddMarketInsightPage;
