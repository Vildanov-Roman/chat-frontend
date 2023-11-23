import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loginform from 'modules/LoginForm/components/LoginForm';
import { RegisterForm } from 'modules';
import CheckEmailInfo from './pages/Auth/components/CheckInfo';

import { Home } from 'pages';

const App = () => {
  const isAuth = useSelector(state => state.userReducer.isAuth);
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/signin" element={<Loginform />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/signup/verify" element={<CheckEmailInfo />} />
        <Route
          exact
          path="/im"
          element={isAuth ? <Home /> : <Navigate to="/signin" />}
        />
      </Routes>
    </div>
  );
};

export default App;
