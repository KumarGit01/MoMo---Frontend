import React, { createContext, useState, useContext } from 'react';

export  interface User {
  id: number;
  name: string;
  email: string;
  bio: string;
}

interface UserContextType {
  user: User;
  updateUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider:React.FC<{ children: React.ReactNode }>= ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer with a passion for open-source projects.'
  });

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
