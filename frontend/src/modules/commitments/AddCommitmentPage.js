import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import Loader from '../../components/Loader';
import '../../styles/components/CommitmentCard.css';

const AddCommitmentPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    companyID: '',
    commitmentType: '',
    description: '',
    startDate: '',
    endDate: '',
    progressReports: '',
    productIDs: '',
    ingredientIDs: ''
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
      await axios.post(apiEndpoints.commitments, {
        ...form,
        progressReports: form.progressReports.split(',').map(p => p.trim()),
        productIDs: form.productIDs.split(',').map(p => p.trim()),
        ingredientIDs: form.ingredientIDs.split(',').map(i => i.trim())
      });
      navigate('/commitments');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add commitment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-commitment-page">
      <h2>Add Commitment</h2>
      <form onSubmit={handleSubmit} className="commitment-form">
        <label>Company ID<input name="companyID" value={form.companyID} onChange={handleChange} required /></label>
        <label>Type<input name="commitmentType" value={form.commitmentType} onChange={handleChange} required /></label>
        <label>Description<textarea name="description" value={form.description} onChange={handleChange} required /></label>
        <label>Start Date<input type="date" name="startDate" value={form.startDate} onChange={handleChange} /></label>
        <label>End Date<input type="date" name="endDate" value={form.endDate} onChange={handleChange} /></label>
        <label>Progress Reports (comma separated)<input name="progressReports" value={form.progressReports} onChange={handleChange} /></label>
        <label>Product IDs (comma separated)<input name="productIDs" value={form.productIDs} onChange={handleChange} /></label>
        <label>Ingredient IDs (comma separated)<input name="ingredientIDs" value={form.ingredientIDs} onChange={handleChange} /></label>
        {error && (<div className="error-message">{error}</div>)}
        <button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Add Commitment'}</button>
      </form>
    </div>
  );
};
export default AddCommitmentPage;
