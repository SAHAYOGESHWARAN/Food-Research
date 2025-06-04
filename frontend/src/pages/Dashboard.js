import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import useAuth from '../hooks/useAuth';
import Chart from '../components/Chart';
import Button from '../components/Button';
import logo from '../assets/images/logo192.png';
import googleIcon from '../assets/images/google.svg';
import facebookIcon from '../assets/images/facebook.svg';
import youtubeIcon from '../assets/images/youtube.svg';
import { FaUsers, FaChartLine, FaBoxOpen, FaRegCheckCircle, FaRegNewspaper, FaRegLightbulb, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import '../styles/dashboard.css';
import '../styles/global.css';
import Modal from '../components/Modal';

const sideNavLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { label: 'Products', href: '/products', icon: '🧃' },
  { label: 'Commitments', href: '/commitments', icon: '✅' },
  { label: 'Market Insights', href: '/market-insights', icon: '📈' },
  { label: 'Regulations', href: '/regulations', icon: '📜' },
  { label: 'Studies', href: '/studies', icon: '📚' },
  { label: 'Tutorials', href: '/tutorials', icon: '💡' },
  { label: 'Ingredients', href: '/ingredients', icon: '🥦' },
  { label: 'Subscriptions', href: '/subscriptions', icon: '💳' },
  { label: 'Profile', href: '/profile', icon: '👤' },
  { label: 'Settings', href: '/settings', icon: '⚙️' },
  { label: 'Support', href: '/support', icon: '🆘' },
  { label: 'Login', href: '/login', icon: '🔑' },
  { label: 'Register', href: '/register', icon: '📝' },
];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Demo notifications/messages
  const notifications = [
    { id: 1, message: 'New comment on your post', time: '2 mins ago' },
    { id: 2, message: 'You have a new follower', time: '5 mins ago' },
    { id: 3, message: 'Subscription expiring soon', time: '1 day ago' },
  ];
  const messages = [
    { id: 1, sender: 'Eddie', content: 'Hey, check out the new files!', time: '2 hours ago' },
    { id: 2, sender: 'Sarah', content: 'Can you review the design?', time: '3 hours ago' },
    { id: 3, sender: 'Admin', content: 'Welcome to Nutric Platform!', time: '1 day ago' },
  ];
  const mails = [
    { id: 1, subject: 'Welcome to Nutric!', from: 'support@nutric.com', time: 'Today' },
    { id: 2, subject: 'Your subscription invoice', from: 'billing@nutric.com', time: 'Yesterday' },
  ];
  const profilePicture = user?.profilePicture || 'https://storage.googleapis.com/a1aa/image/a9ee07d4-0be4-4e30-7389-35b4d21fda87.jpg';

  const chartData = useMemo(() => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Subscriptions',
        data: [12, 19, 8, 15, 22, 17],
        backgroundColor: 'rgba(49,126,251,0.2)',
        borderColor: 'rgba(49,126,251,1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }), []);

  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Monthly Subscriptions' },
    },
    layout: {
      padding: { left: 10, right: 10, top: 10, bottom: 10 },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { color: '#e3e9f6' } },
    },
  }), []);

  const stats = [
    { label: 'Active Users', value: 1240, icon: <FaUsers color="#317EFB" size={28} />, color: '#e3f0ff' },
    { label: 'Total Products', value: 320, icon: <FaBoxOpen color="#317EFB" size={28} />, color: '#eaf7f2' },
    { label: 'Commitments', value: 87, icon: <FaRegCheckCircle color="#317EFB" size={28} />, color: '#f7f3ea' },
    { label: 'Market Insights', value: 45, icon: <FaRegNewspaper color="#317EFB" size={28} />, color: '#f0eaff' },
    { label: 'Studies', value: 19, icon: <FaChartLine color="#317EFB" size={28} />, color: '#eaf0ff' },
    { label: 'Tutorials', value: 12, icon: <FaRegLightbulb color="#317EFB" size={28} />, color: '#fffbe3' },
  ];

  // Add state for edit profile modal
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editProfile, setEditProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    mobile: user?.mobile || '',
    profilePicture: user?.profilePicture || '',
  });
  const [profilePicFile, setProfilePicFile] = useState(null);

  // Handler for profile edit
  const handleProfileEditChange = (e) => {
    const { name, value } = e.target;
    setEditProfile(prev => ({ ...prev, [name]: value }));
  };
  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicFile(e.target.files[0]);
      setEditProfile(prev => ({ ...prev, profilePicture: URL.createObjectURL(e.target.files[0]) }));
    }
  };
  const handleProfileEditSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call to update user profile (e.g., /api/user/update)
    // Example endpoint: /api/user/update-profile
    // Send: { name, email, mobile, profilePicture }
    setEditProfileOpen(false);
    // Optionally, update user context/state
  };

  return (
    <DashboardLayout>
      <div className="dashboard-root">
        {/* Sidebar */}
        <aside className="dashboard-sidenav">
          <div className="dashboard-logo-wrap">
            <img src={logo} alt="Logo" className="dashboard-logo" />
            <span className="dashboard-brand">Nutra</span>
          </div>
          <nav className="dashboard-nav">
            {sideNavLinks.map(link => (
              <Button
                key={link.href}
                className="side-nav-btn"
                onClick={() => navigate(link.href)}
                style={{ width: '100%', justifyContent: 'flex-start' }}
              >
                <span className="side-nav-icon">{link.icon}</span>
                {link.label}
              </Button>
            ))}
            {/* Logout Button */}
            <Button
              className="side-nav-btn"
              style={{ width: '100%', justifyContent: 'flex-start', marginTop: '2em', background: '#e74c3c', color: '#fff' }}
              onClick={() => {
                localStorage.clear();
                window.location.href = '/login';
              }}
            >
              <span className="side-nav-icon">🚪</span> Logout
            </Button>
          </nav>
        </aside>

        {/* Main Dashboard Content */}
        <main className="dashboard-main">
          <div className="dashboard-header-bar">
            <div className="dashboard-header-icons">
              <span className="dashboard-header-icon"><FaBell /></span>
              <span className="dashboard-header-icon"><FaEnvelope /></span>
              <span className="dashboard-header-icon"><FaUserCircle /></span>
            </div>
            <div className="dashboard-header-profile">
              <img src={profilePicture} alt="Profile" className="dashboard-header-avatar" />
              <span className="dashboard-header-name">{user?.name || user?.email || 'User'}</span>
            </div>
          </div>

          <h2 className="dashboard-welcome">
            Welcome, {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : (user?.name || user?.email || 'User')}!
          </h2>
          <p className="dashboard-desc">
            Your analytics hub for food, beverage, nutraceutical, and cosmeceutical insights.
          </p>

          {/* --- Advanced Stats Cards --- */}
          <div className="dashboard-stats-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5em', marginBottom: '2em' }}>
            {stats.map((stat, idx) => (
              <div key={stat.label} style={{
                background: stat.color,
                borderRadius: '14px',
                boxShadow: '0 2px 12px rgba(49,126,251,0.07)',
                padding: '1.2em 1.5em',
                minWidth: 170,
                flex: '1 1 170px',
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ background: '#fff', borderRadius: '50%', padding: 8, boxShadow: '0 1px 4px #317efb22' }}>{stat.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 22, color: '#317EFB' }}>{stat.value}</div>
                  <div style={{ fontSize: 14, color: '#4a5a7a', opacity: 0.85 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Chart */}
          <div
            className="dashboard-chart-wrap"
            style={{ height: '320px', maxWidth: '100%', minWidth: '260px' }}
          >
            <Chart type="line" data={chartData} options={chartOptions} />
          </div>

          {/* Dashboard Actions (added Dashboard button) */}
          <div className="dashboard-actions">
            <Link to="/dashboard"><Button>Dashboard</Button></Link>
            <Link to="/products"><Button>View Products</Button></Link>
            <Link to="/commitments"><Button>View Commitments</Button></Link>
            <Link to="/market-insights"><Button>Market Insights</Button></Link>
            <Link to="/regulations"><Button>Regulations</Button></Link>
            <Link to="/studies"><Button>Studies</Button></Link>
            <Link to="/tutorials"><Button>Tutorials</Button></Link>
            <Link to="/ingredients"><Button>Ingredients</Button></Link>
            {/* Role-based Add Pages */}
            {(user?.role === 'admin' || user?.role === 'contributor') && (
              <>
                <Link to="/add-market-insight"><Button>Add Market Insight</Button></Link>
                <Link to="/add-product"><Button>Add Product</Button></Link>
                <Link to="/add-regulation"><Button>Add Regulation</Button></Link>
              </>
            )}
          </div>

          {/* User Profile Box */}
          <div className="dashboard-profile-box">
            <img src={editProfile.profilePicture || profilePicture} alt="Profile" className="dashboard-profile-avatar" />
            <div className="dashboard-profile-info">
              <div className="dashboard-profile-name">{editProfile.name || 'User'}</div>
              <div className="dashboard-profile-email">{editProfile.email}</div>
              <div className="dashboard-profile-role">Role: {user?.role || 'N/A'}</div>
              <div className="dashboard-profile-mobile">Mobile: {editProfile.mobile || 'N/A'}</div>
              <Button style={{marginTop:8}} onClick={() => setEditProfileOpen(true)}>Edit Profile</Button>
            </div>
          </div>

          {/* Edit Profile Modal */}
          {editProfileOpen && (
            <Modal onClose={() => setEditProfileOpen(false)}>
              <form className="edit-profile-form" onSubmit={handleProfileEditSubmit}>
                <h3>Edit Profile</h3>
                <label>Profile Photo</label>
                <input type="file" accept="image/*" name="profilePicture" onChange={handleProfilePicChange} />
                {editProfile.profilePicture && (
                  <img src={editProfile.profilePicture} alt="Preview" style={{width:64, height:64, borderRadius:'50%', margin:'8px 0'}} />
                )}
                <label>Name</label>
                <input type="text" name="name" value={editProfile.name} onChange={handleProfileEditChange} required />
                <label>Email</label>
                <input type="email" name="email" value={editProfile.email} onChange={handleProfileEditChange} required />
                <label>Mobile</label>
                <input type="text" name="mobile" value={editProfile.mobile} onChange={handleProfileEditChange} />
                <div style={{display:'flex',gap:12,marginTop:16}}>
                  <Button type="submit">Save</Button>
                  <Button type="button" onClick={() => setEditProfileOpen(false)} style={{background:'#eee',color:'#333'}}>Cancel</Button>
                </div>
                <div style={{fontSize:'0.9em',marginTop:8,color:'#888'}}>
                  (Profile updates will be sent to: <b>/api/user/update-profile</b>)
                </div>
              </form>
            </Modal>
          )}

          {/* Notification Box */}
          <div className="dashboard-notification-box">
            <div className="dashboard-notification-title"><FaBell /> Notifications</div>
            <ul className="dashboard-notification-list">
              {notifications.map(n => (
                <li key={n.id} className="dashboard-notification-item">
                  <span>{n.message}</span>
                  <span className="dashboard-notification-time">{n.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mail Box */}
          <div className="dashboard-mail-box">
            <div className="dashboard-mail-title"><FaEnvelope /> Mailbox</div>
            <ul className="dashboard-mail-list">
              {mails.map(m => (
                <li key={m.id} className="dashboard-mail-item">
                  <span className="dashboard-mail-subject">{m.subject}</span>
                  <span className="dashboard-mail-from">{m.from}</span>
                  <span className="dashboard-mail-time">{m.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Message Box */}
          <div className="dashboard-message-box">
            <div className="dashboard-message-title"><FaEnvelope /> Messages</div>
            <ul className="dashboard-message-list">
              {messages.map(msg => (
                <li key={msg.id} className="dashboard-message-item">
                  <span className="dashboard-message-sender">{msg.sender}:</span>
                  <span className="dashboard-message-content">{msg.content}</span>
                  <span className="dashboard-message-time">{msg.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Quick Links */}
          <div className="dashboard-social-links" style={{ display: 'flex', gap: '1.2em', marginBottom: '1.5em' }}>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" title="Google">
              <img src={googleIcon} alt="Google" style={{ width: 36, height: 36, borderRadius: '50%', boxShadow: '0 1px 4px #317efb22' }} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <img src={facebookIcon} alt="Facebook" style={{ width: 36, height: 36, borderRadius: '50%', boxShadow: '0 1px 4px #317efb22' }} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
              <img src={youtubeIcon} alt="YouTube" style={{ width: 36, height: 36, borderRadius: '50%', boxShadow: '0 1px 4px #317efb22' }} />
            </a>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
