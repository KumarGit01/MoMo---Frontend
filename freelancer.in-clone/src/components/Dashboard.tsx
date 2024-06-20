import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import UserProfile from './UserProfile';
import EditProfileForm from './EditProfileForm';
import userAvatar from '../logo192.png'; 
import './Dashboard.css'; 

const Dashboard: React.FC = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (updatedUser: typeof user) => {
    updateUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-content">
        <div className="profile-card">
          <div className="avatar-container">
            <img src={userAvatar} alt="User Avatar" className="avatar" />
          </div>
          <div className="profile-info">
            {isEditing ? (
              <EditProfileForm user={user} onSave={handleSave} onCancel={handleEditToggle} />
            ) : (
              <UserProfile user={user} onEdit={handleEditToggle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
