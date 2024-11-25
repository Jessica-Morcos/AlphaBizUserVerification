import React from "react";
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get('https://alphabiz-server.onrender.com/api/profile');
        setUser(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile(); // Fetch user on mount
  }, []); // No dependencies to prevent stale data

  const logout = async () => {
    try {
      await axios.post('https://alphabiz-server.onrender.com/api/logout'); // Backend clears cookies
      setUser(null); // Clear user state on logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}
