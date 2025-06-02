import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import apiEndpoints from '../../api/apiEndpoints';
import axios from '../../api/axiosInstance';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(apiEndpoints.products);
        setProducts(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="product-list-page">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product._id} className="product-list-item">
              <Link to={`/products/${product._id}`}>{product.productName}</Link>
              <div><strong>Category:</strong> {product.productCategory}</div>
              <div><strong>Last Updated:</strong> {product.lastUpdated ? new Date(product.lastUpdated).toLocaleDateString() : 'N/A'}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductListPage;
