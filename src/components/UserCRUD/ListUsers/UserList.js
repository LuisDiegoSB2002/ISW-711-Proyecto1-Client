import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./UserList";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Hacer la solicitud HTTP para obtener los usuarios cuando el componente se monta
    axios.get('http://localhost:3001/obtener')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='all'>
      <h2 className='titulo'>Lista de Usuarios</h2>

      <ul className='contenedor'>
        <div className='user'>
          {users.map((user) => (
            <li className='id-user' key={user._id}>
              <p className='name'>Nombre: {user.name}</p>
              <p className='email'>Email: {user.email}</p>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default UserList;
