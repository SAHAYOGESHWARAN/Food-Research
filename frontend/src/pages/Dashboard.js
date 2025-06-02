import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import useAuth from '../hooks/useAuth';
import Chart from '../components/Chart';
import Button from '../components/Button';
import logo from '../assets/images/logo192.png';
import '../styles/dashboard.css';

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

  return (
    <DashboardLayout>
      <div className="dashboard-root">
        {/* Sidebar */}
        <aside className="dashboard-sidenav">
          <div className="dashboard-logo-wrap">
            <img src={logo} alt="Logo" className="dashboard-logo" />
            <span className="dashboard-brand">NutraAnalytics</span>
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
          </nav>
        </aside>

        {/* Main Dashboard Content */}
        <main className="dashboard-main">
          <h2 className="dashboard-welcome">
            Welcome, {user?.name || user?.email || 'User'}!
          </h2>
          <p className="dashboard-desc">
            Your analytics hub for food, beverage, nutraceutical, and cosmeceutical insights.
          </p>

          <div
            className="dashboard-chart-wrap"
            style={{ height: '320px', maxWidth: '100%', minWidth: '260px' }}
          >
            <Chart type="line" data={chartData} options={chartOptions} />
          </div>

          <div className="dashboard-actions">
            <Link to="/products"><Button>View Products</Button></Link>
            <Link to="/commitments"><Button>View Commitments</Button></Link>
            <Link to="/market-insights"><Button>Market Insights</Button></Link>
            <Link to="/regulations"><Button>Regulations</Button></Link>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
