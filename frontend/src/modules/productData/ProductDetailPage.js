import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${apiEndpoints.products}/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load product details');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail-page">
      <h2>{product.productName}</h2>
      <div><strong>Category:</strong> {product.productCategory}</div>
      <div><strong>Specifications:</strong> {product.specifications}</div>
      <div><strong>Nutritional Content:</strong> {product.nutritionalContent}</div>
      <div><strong>Safety Guidelines:</strong> {product.safetyGuidelines}</div>
      <div><strong>Last Updated:</strong> {product.lastUpdated ? new Date(product.lastUpdated).toLocaleDateString() : 'N/A'}</div>
      {product.ingredients && product.ingredients.length > 0 && (
        <div><strong>Ingredients:</strong> {product.ingredients.map(ing => ing.ingredientName || ing).join(', ')}</div>
      )}
      {product.regulations && product.regulations.length > 0 && (
        <div><strong>Regulations:</strong> {product.regulations.map(reg => reg.regulationName || reg).join(', ')}</div>
      )}
      {product.commitments && product.commitments.length > 0 && (
        <div><strong>Commitments:</strong> {product.commitments.map(com => com.commitmentType || com).join(', ')}</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
