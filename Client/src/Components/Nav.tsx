import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

type Props = {}

export const Nav = (props: Props) => {
  return (
    <div className="nav">
        <span>📡</span>
        <section className="links">
            <Link to='/signin'>Sign In</Link>
            <Link to='/register'>Register</Link>
        </section>
    </div>
  )
}