import React from 'react';
import { User } from '../context/UserContext';

interface UserProfileProps {
  user: User;
  onEdit: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onEdit }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
