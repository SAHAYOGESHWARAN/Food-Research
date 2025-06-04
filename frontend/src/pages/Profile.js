import React from 'react';
import MainLayout from '../layouts/MainLayout';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <MainLayout>
        <div className="profile-page">
          <h2>Profile</h2>
          <p>You are not logged in.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="profile-page">
        <h2>Profile</h2>
        <div><strong>Name:</strong> {user.name || '-'}</div>
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Role:</strong> {user.role}</div>
        <div><strong>Status:</strong> {user.isActive ? 'Active' : 'Inactive'}</div>
        <div><strong>Mobile:</strong> {user.mobile || 'N/A'}</div>
        {/* Add more profile details or edit functionality as needed */}
      </div>
    </MainLayout>
  );
};

export default Profile;
