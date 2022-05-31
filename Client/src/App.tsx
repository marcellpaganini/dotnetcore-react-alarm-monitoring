import React, { FC } from 'react';
import { SignIn } from './Components/Auth/SignIn';
import { Register } from './Components/Auth/Register';
import { Nav } from './Components/Nav';
import { Main } from './Components/Main';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App: FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="" element={<SignIn/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;