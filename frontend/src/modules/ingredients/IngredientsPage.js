import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';
import '../../styles/components/IngredientsPage.css';

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiEndpoints.ingredients || '/ingredients');
        setIngredients(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load ingredients');
      } finally {
        setLoading(false);
      }
    };
    fetchIngredients();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="ingredients-page">
      <h2>Ingredients</h2>
      <Link to="/ingredients/add" className="add-btn">Add Ingredient</Link>
      {ingredients.length === 0 ? (
        <p>No ingredients found.</p>
      ) : (
        <ul className="ingredients-list">
          {ingredients.map((ingredient) => (
            <li key={ingredient._id} className="ingredients-list-item">
              <Link to={`/ingredients/${ingredient._id}`}>{ingredient.ingredientName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default IngredientsPage;
