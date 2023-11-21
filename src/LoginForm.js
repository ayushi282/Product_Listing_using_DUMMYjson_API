import React, { useState } from 'react';
import { useProductContext } from './ProductContext';

const LoginForm = () => {
  const { login, user } = useProductContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <p>You are already logged in as {user.username}</p>
      ) : (
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
