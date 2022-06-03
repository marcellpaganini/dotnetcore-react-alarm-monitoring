import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './SignIn.css';

type Props = {}

export const Register = (props: Props) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const checkPassword = (password: string): boolean => {
    var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");  
    if (password.length >= 7 && pattern.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify({
        userName,
        password
      })
    });

    if (!checkPassword(password) || userName.length < 2 || response.status === 400) {
      setError("Invalid password/user name.");
      return;
    }

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
            <span className="error">{error}</span>
            <span className="validationInfo"><strong>Requirements:</strong> Password with at least 7 characters, uppercase, lowercase letter, number, special character and user name with at least 2 characters.</span>
          </form>
        </section>
      </div>   
  )
}