import React from "react";

export const loginAPI = async (username, password) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
  
      if (data.token) {
        return { username, token: data.token };
      } else {
        console.error('Invalid login:', data);
        throw new Error('Invalid login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      throw new Error('Error during login');
    }
  };
  