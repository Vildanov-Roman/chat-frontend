import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Loginform from "modules/LoginForm/components/LoginForm";
import { RegisterForm } from "modules";

import { Home } from "pages";

const App = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/login' element={<Loginform/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route
          exact
          path="/im"
          element={isAuth ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;


