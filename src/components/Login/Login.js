import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      
      console.log(response.data);
      sessionStorage.setItem("token",response.data.token);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleRegister = () => {
    // Redireccionar a la página de registro
    window.location.href = '/register';
  };

  return (
    <div className='all'>
      <h2 className='title'>Login</h2>
      <form className='form' onSubmit={handleLogin}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className='btn-start'>Iniciar sesión</button>
        <Link to ="/register" className='btn-register'> Sing Up</Link>
      </form>    
    </div>
  );
};

export default Login;


