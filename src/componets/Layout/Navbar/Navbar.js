import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const nav = {
    width: '100vw',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#ddd',
    borderBottom: '2px solid #8a5e1d'
  };
  const link = {
    color: '#8a5e1dc4',
    fontSize: '18px',
    textTransform: 'uppercase'
  };
  return (
    <div style={nav}>
      <Link style={link} to="/">
        Home
      </Link>
      <h1 style={link}>Ozzy10Recipes</h1>
      <Link style={link} to="/about">
        About
      </Link>
    </div>
  );
};

export default Navbar;
