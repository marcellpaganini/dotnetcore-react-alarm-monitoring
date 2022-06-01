import React from 'react';
import './SignIn.css';

type Props = {}

export const SignIn = (props: Props) => {
  return (
    <div className="signIn"> 
      <section className="signInForm">
        <form>
          <h1>Please Sign In</h1>
          <input type="text" placeholder="User Name" required></input>
          <input type="password" placeholder="Password" required></input>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </div> 
  )
}