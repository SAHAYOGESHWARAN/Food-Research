import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import '../../styles/components/IngredientsPage.css';

const IngredientDetailPage = () => {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredient = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${apiEndpoints.ingredients}/${id}`);
        setIngredient(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load ingredient details');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchIngredient();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;
  if (!ingredient) return <div>Ingredient not found.</div>;

  return (
    <div className="ingredient-detail-page">
      <h2>{ingredient.ingredientName}</h2>
      <div><strong>Nutritional Content:</strong> {ingredient.nutritionalContent}</div>
      <div><strong>Safety Guidelines:</strong> {ingredient.safetyGuidelines}</div>
      <div><strong>Studies:</strong> {ingredient.studies?.map(study => study.title || study).join(', ')}</div>
      <div><strong>Regulations:</strong> {ingredient.regulations?.map(reg => reg.regulationName || reg).join(', ')}</div>
      <div><strong>Commitments:</strong> {ingredient.commitments?.map(com => com.commitmentType || com).join(', ')}</div>
    </div>
  );
};
export default IngredientDetailPage;
