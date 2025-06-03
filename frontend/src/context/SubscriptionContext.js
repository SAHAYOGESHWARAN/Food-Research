import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiEndpoints from '../api/apiEndpoints';
import axios from '../api/axiosInstance';
import useAuth from '../hooks/useAuth';

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubscriptions = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = apiEndpoints.subscriptions;
      if (user && user.role !== 'admin') {
        url = apiEndpoints.subscriptions + '/me';
      }
      const res = await axios.get(url);
      setSubscriptions(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch subscriptions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const refreshSubscriptions = fetchSubscriptions;

  return (
    <SubscriptionContext.Provider value={{ subscriptions, loading, error, refreshSubscriptions }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

SubscriptionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubscriptionContext;
