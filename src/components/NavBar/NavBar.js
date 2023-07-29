import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        
        <Link to="/UserList">
          <img src="./users-icon.png" alt="Users" />
        </Link>
        
        <Link to="/CreateUser">
          <img src="./create-user-icon.png" alt="Create User" />
        </Link>
        
        <Link to="/create-promp">
          <img src="./create-promp-icon.png" alt="Create Promp" />
        </Link>
      </div>
      
      <div className="navbar-logout">
        <img src="./logout-icon.png" alt="Logout" />
      </div> 
    </nav>
  );
};

export default Navbar;
