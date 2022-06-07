import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './SignIn.css';

type Props = {}

export const SignIn = (props: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [cookieUser, setCookieUser] = useState<string>("");

  useEffect(() => {
    (
      async () => {
          const response = await fetch('http://localhost:8000/api/user', {
              headers: { 'Content-Type': 'application/JSON' },
              credentials: 'include',
          });

          const content = await response.json();

          setCookieUser(content.userName);
          if (cookieUser !== undefined && response.status !== 401) {
            setRedirect(true);
          }
      }
  )();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

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

    if (response.status === 200) {
      setRedirect(true);
      setMessage("");
    } else {
      setMessage("Invalid user name or password.");
    }
  };

  if (redirect) {
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