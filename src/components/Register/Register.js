//Nuevo
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    

    try {
        
      const response = await axios.post('http://localhost:3001/register', { name, email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

