import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import Loader from '../../components/Loader';
import '../../styles/components/ProductListPage.css';
import '../../styles/components/AddProductPage.css';

const AddProductPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    productName: '',
    specifications: '',
    nutritionalContent: '',
    safetyGuidelines: '',
    productCategory: '',
    lastUpdated: '',
    ingredients: '',
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
      await axios.post(apiEndpoints.products, {
        ...form,
        ingredients: form.ingredients.split(',').map(i => i.trim()),
        regulations: form.regulations.split(',').map(r => r.trim()),
        commitments: form.commitments.split(',').map(c => c.trim())
      });
      navigate('/products');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-page">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>Name<input name="productName" value={form.productName} onChange={handleChange} required /></label>
        <label>Specifications<textarea name="specifications" value={form.specifications} onChange={handleChange} /></label>
        <label>Nutritional Content<textarea name="nutritionalContent" value={form.nutritionalContent} onChange={handleChange} /></label>
        <label>Safety Guidelines<textarea name="safetyGuidelines" value={form.safetyGuidelines} onChange={handleChange} /></label>
        <label>Category<input name="productCategory" value={form.productCategory} onChange={handleChange} /></label>
        <label>Last Updated<input type="date" name="lastUpdated" value={form.lastUpdated} onChange={handleChange} /></label>
        <label>Ingredients (IDs, comma separated)<input name="ingredients" value={form.ingredients} onChange={handleChange} /></label>
        <label>Regulations (IDs, comma separated)<input name="regulations" value={form.regulations} onChange={handleChange} /></label>
        <label>Commitments (IDs, comma separated)<input name="commitments" value={form.commitments} onChange={handleChange} /></label>
        {error && (<div className="error-message">{error}</div>)}
        <button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Add Product'}</button>
      </form>
    </div>
  );
};
export default AddProductPage;
