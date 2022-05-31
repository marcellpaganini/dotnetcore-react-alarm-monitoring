import React from 'react';
import './SignIn.css';

type Props = {}

export const Register = (props: Props) => {
  return (
    <div className="signIn"> 
      <section className="signInForm">
          <h1>Please Register</h1>
          <input type="text" placeholder="User Name" required></input>
          <input type="password" placeholder="Password" required></input>
          <button type="submit">Submit</button>
      </section>
    </div> 
  )
}