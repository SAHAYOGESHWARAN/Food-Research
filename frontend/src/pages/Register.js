import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Button from '../components/Button';
import Loader from '../components/Loader';
import useAuth from '../hooks/useAuth';
import authService from '../api/authService';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '', name: '', role: 'user' });
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
      const data = await authService.register(form);
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <div className="error-message">{error}</div>}
        
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="admin">Admin</option>
          <option value="contributor">Contributor</option>
          <option value="user">Subscriber</option>
        </select>
        
        <Button type="submit" disabled={loading}>
          {loading ? <Loader size={20} /> : 'Register'}
        </Button>

        {/* Google Login Button at the bottom */}
        <div style={{ marginTop: '1.2em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button type="button" className="google-btn" style={{ background: '#fff', color: '#317EFB', border: '1.5px solid #5eaefd', fontWeight: 600, width: '100%', maxWidth: 220 }}>
            <img src={require('../assets/images/google.svg').default} alt="Google" style={{ width: 20, marginRight: 8, verticalAlign: 'middle' }} />
            Sign up with Google
          </Button>
        </div>

        <div className="auth-form__footer">
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
