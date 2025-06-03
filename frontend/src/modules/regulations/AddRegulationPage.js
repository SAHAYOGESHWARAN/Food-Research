import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import Loader from '../../components/Loader';
import '../../styles/components/RegulationCard.css';
import '../../styles/components/AddRegulationPage.css';

const AddRegulationPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    regulationName: '',
    description: '',
    applicableRegions: '',
    complianceStandards: '',
    effectiveDate: '',
    lastUpdated: '',
    ingredientNames: '',
    productNames: ''
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
      await axios.post(apiEndpoints.regulations, {
        ...form,
        applicableRegions: form.applicableRegions.split(',').map(r => r.trim()),
        ingredientNames: form.ingredientNames.split(',').map(i => i.trim()),
        productNames: form.productNames.split(',').map(p => p.trim())
      });
      navigate('/regulations');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add regulation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-regulation-page">
      <h2>Add Regulation</h2>
      <form onSubmit={handleSubmit} className="regulation-form">
        <label>Name<input name="regulationName" value={form.regulationName} onChange={handleChange} required /></label>
        <label>Description<textarea name="description" value={form.description} onChange={handleChange} required /></label>
        <label>Applicable Regions (comma separated)<input name="applicableRegions" value={form.applicableRegions} onChange={handleChange} /></label>
        <label>Compliance Standards<input name="complianceStandards" value={form.complianceStandards} onChange={handleChange} /></label>
        <label>Effective Date<input type="date" name="effectiveDate" value={form.effectiveDate} onChange={handleChange} /></label>
        <label>Last Updated<input type="date" name="lastUpdated" value={form.lastUpdated} onChange={handleChange} /></label>
        <label>Ingredient Names (comma separated)<input name="ingredientNames" value={form.ingredientNames} onChange={handleChange} /></label>
        <label>Product Names (comma separated)<input name="productNames" value={form.productNames} onChange={handleChange} /></label>
        {error && (<div className="error-message">{error}</div>)}
        <button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Add Regulation'}</button>
      </form>
    </div>
  );
};
export default AddRegulationPage;
