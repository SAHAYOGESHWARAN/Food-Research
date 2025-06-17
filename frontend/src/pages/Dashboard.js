import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import useAuth from '../hooks/useAuth';
import Chart from '../components/Chart';
import Button from '../components/Button';
import logo from '../assets/images/logo192.png';
import googleIcon from '../assets/images/google.svg';
import { FaUsers, FaChartLine, FaBoxOpen, FaRegCheckCircle, FaRegNewspaper, FaRegLightbulb } from 'react-icons/fa';
import '../styles/dashboard.css';
import '../styles/global.css';

const sideNavLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { label: 'Products', href: '/products', icon: '🧃' },
  { label: 'Commitments', href: '/commitments', icon: '✅' },
  { label: 'Market Insights', href: '/market-insights', icon: '📈' },
  { label: 'Regulations', href: '/regulations', icon: '📜' },
  { label: 'Profile', href: '/profile', icon: '👤' },
  { label: 'Login', href: '/login', icon: '🔑' },
  { label: 'Register', href: '/register', icon: '📝' },
];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

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
          {/* Social Media Quick Links */}
          <div className="dashboard-social-links" style={{ display: 'flex', gap: '1.2em', marginBottom: '1.5em' }}>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" title="Google">
              <img src={googleIcon} alt="Google" style={{ width: 36, height: 36, borderRadius: '50%', boxShadow: '0 1px 4px #317efb22' }} />
            </a>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
