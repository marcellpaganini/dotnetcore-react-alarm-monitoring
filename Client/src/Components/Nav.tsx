import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export const Nav = () => {
  return (
    <div className="nav">
        <h2>📡</h2>
        <section className="links">
            <Link to='/signin'>Sign In</Link>
            <Link to='/register'>Register</Link>
        </section>
    </div>
  )
}