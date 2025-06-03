import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Button from '../components/Button';
import Loader from '../components/Loader';
import useAuth from '../hooks/useAuth';
import authService from '../api/authService';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await authService.login({ email, password });
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form className="auth-form" onSubmit={handleSubmit} autoComplete="on">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <Button type="submit" disabled={loading}>{loading ? <Loader size={20} /> : 'Login'}</Button>

        {/* Google Login Button at the bottom */}
        <div style={{ marginTop: '1.2em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button type="button" className="google-btn" style={{ background: '#fff', color: '#317EFB', border: '1.5px solid #5eaefd', fontWeight: 600, width: '100%', maxWidth: 220 }}>
            <img src={require('../assets/images/google.svg').default} alt="Google" style={{ width: 20, marginRight: 8, verticalAlign: 'middle' }} />
            Sign in with Google
          </Button>
        </div>

        <div className="auth-form__footer">
          <span>Don't have an account? <Link to="/register">Register</Link></span>
          <span style={{ marginTop: 8, display: 'block' }}>
            <Link to="/forgot-password" style={{ color: '#317EFB', fontWeight: 500 }}>Forgot password?</Link>
          </span>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
