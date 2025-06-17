import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import ThemeContext from '../context/ThemeContext';
import '../styles/settings.css';

const Settings = () => {
  const { user, updateUser, changePassword } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [message, setMessage] = useState('');

  const handleProfileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const res = await updateUser(form);
    setMessage(res?.message || 'Profile updated!');
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setMessage('New passwords do not match.');
      return;
    }
    const res = await changePassword(passwords.current, passwords.new);
    setMessage(res?.message || 'Password changed!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
      {message && <div className="settings-message">{message}</div>}
      <section className="settings-section">
        <h3>Profile</h3>
        <form onSubmit={handleProfileSubmit} className="settings-form">
          <label className="settings-label">
            Name
            <input type="text" name="name" value={form.name} onChange={handleProfileChange} required className="settings-input" />
          </label>
          <label className="settings-label">
            Email
            <input type="email" name="email" value={form.email} onChange={handleProfileChange} required className="settings-input" />
          </label>
          <button type="submit" className="settings-btn">Update Profile</button>
        </form>
      </section>
      <section className="settings-section">
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordSubmit} className="settings-form">
          <label className="settings-label">
            Current Password
            <input type="password" name="current" value={passwords.current} onChange={handlePasswordChange} required className="settings-input" />
          </label>
          <label className="settings-label">
            New Password
            <input type="password" name="new" value={passwords.new} onChange={handlePasswordChange} required className="settings-input" />
          </label>
          <label className="settings-label">
            Confirm New Password
            <input type="password" name="confirm" value={passwords.confirm} onChange={handlePasswordChange} required className="settings-input" />
          </label>
          <button type="submit" className="settings-btn">Change Password</button>
        </form>
      </section>
      <section className="settings-section">
        <h3>Appearance</h3>
        <label className="settings-toggle">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
      </section>
    </div>
  );
};

export default Settings;
