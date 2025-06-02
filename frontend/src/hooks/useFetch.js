import { useState, useEffect } from 'react';
import axios from '../api/axiosInstance';

const useFetch = (url, options = {}, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async (overrideUrl, overrideOptions) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: overrideUrl || url,
        ...options,
        ...overrideOptions,
      });
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch && url) {
      fetchData();
    }
    // eslint-disable-next-line
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
