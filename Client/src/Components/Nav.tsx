import React from 'react';
import './Nav.css';

type Props = {}

export const Nav = (props: Props) => {
  return (
    <div className="nav">
        <span>📡</span>
        <section className="links">
            <a href='/'>Sign In</a>
            <a href='/'>Register</a>
        </section>
    </div>
  )
}