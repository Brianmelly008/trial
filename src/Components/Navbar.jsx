import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{color:'goldenrod'}}>Welcome to Golden Horizon Hotel</h1>
        <p style={{ color: 'goldenrod', fontSize: '20px' }}>Thank you! for choosing us.</p>
        <p style={{ color: 'goldenrod', fontSize: '20px' }}>Press Rooms to proceed</p>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/" style={buttonStyle}>Home</Link>
          </li>
          <li>
            <Link to="/rooms" style={{ ...buttonStyle, marginLeft: '350px' }}>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const buttonStyle = {
  textDecoration: 'none',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Navbar;
