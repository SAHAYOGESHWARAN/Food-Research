import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Logout = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    localStorage.clear();
    navigate('/login');
  }, [navigate]);
  return (
    <div style={{ textAlign: 'center', marginTop: '4em' }}>
      <h2>You have been logged out.</h2>
      <Button onClick={() => navigate('/login')}>Go to Login</Button>
    </div>
  );
};

export default Logout;
