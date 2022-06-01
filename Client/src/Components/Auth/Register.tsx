import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './SignIn.css';

type Props = {}

export const Register = (props: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify({
        userName,
        password
      })
    });

    setRedirect(true);
  };

  if(redirect) {
    return <Navigate to='/signin' />;
  }

  return (
      <div className="signIn"> 
        <section className="signInForm">
          <form onSubmit={submit}>
            <h1>Please Register</h1>
            <input type="text" placeholder="User Name" required onChange={e => setUserName(e.target.value)}></input>
            <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>   
  )
}