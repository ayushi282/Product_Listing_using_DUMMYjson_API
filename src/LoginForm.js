import React, { useState,useEffect } from 'react';
import { useProductContext } from './ProductContext';
import { Link,useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const { login, user ,logout } = useProductContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleLogin = () => {
    login(username, password);
    navigate('/ProductD')
      };
const handlelogout=()=>{
  logout();
};
  return (
    <div>
    <h2>{user?'Logout':'Login'}</h2>
      {user ? (
        <div>
        <p>You are already logged in as {user.username}</p>
        <br/>
        <p>Click below to logout</p>
        <button type="button" onClick={handlelogout}>
          Logout
        </button>
      </div>
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
