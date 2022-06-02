import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './SignIn.css';

type Props = {}

export const SignIn = (props: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      credentials: 'include',
      body: JSON.stringify({
        userName,
        password
      })
    });

    const content = await response.json();
    setName(content.userName);

    if (name !== "") {
      setRedirect(true);
    } else {
      setMessage("Invalid user name or password.");
    }
  };

  if(redirect) {
    return <Navigate to='/main' />;
  }
  return (
    <div className="signIn"> 
      <section className="signInForm">
        <form onSubmit={submit}>
          <h1>Please Sign In</h1>
          <input type="text" placeholder="User Name" required onChange={e => setUserName(e.target.value)}></input>
          <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}></input>
          <span className='error'>{message}</span>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </div> 
  )
}