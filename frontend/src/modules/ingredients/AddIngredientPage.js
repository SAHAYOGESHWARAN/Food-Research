import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import Loader from '../../components/Loader';
import '../../styles/components/IngredientsPage.css';

const AddIngredientPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ingredientName: '',
    nutritionalContent: '',
    safetyGuidelines: '',
    studies: '',
    regulations: '',
    commitments: ''
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
      await axios.post(apiEndpoints.ingredients, {
        ...form,
        studies: form.studies.split(',').map(s => s.trim()),
        regulations: form.regulations.split(',').map(r => r.trim()),
        commitments: form.commitments.split(',').map(c => c.trim())
      });
      navigate('/ingredients');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add ingredient');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-ingredient-page">
      <h2>Add Ingredient</h2>
      <form onSubmit={handleSubmit} className="ingredient-form">
        <label>Name<input name="ingredientName" value={form.ingredientName} onChange={handleChange} required /></label>
        <label>Nutritional Content<textarea name="nutritionalContent" value={form.nutritionalContent} onChange={handleChange} /></label>
        <label>Safety Guidelines<textarea name="safetyGuidelines" value={form.safetyGuidelines} onChange={handleChange} /></label>
        <label>Studies (IDs, comma separated)<input name="studies" value={form.studies} onChange={handleChange} /></label>
        <label>Regulations (IDs, comma separated)<input name="regulations" value={form.regulations} onChange={handleChange} /></label>
        <label>Commitments (IDs, comma separated)<input name="commitments" value={form.commitments} onChange={handleChange} /></label>
        {error && (<div className="error-message">{error}</div>)}
        <button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Add Ingredient'}</button>
      </form>
    </div>
  );
};
export default AddIngredientPage;
