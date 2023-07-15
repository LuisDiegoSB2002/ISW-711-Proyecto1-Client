import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleRegister = () => {
    // Redireccionar a la página de registro
    window.location.href = '/register';
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Iniciar sesión</button>
        <button type="button" onClick={handleRegister}>Registrarse</button>
      </form>
    </div>
  );
};

export default Login;


