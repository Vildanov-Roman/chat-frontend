import React from "react";
import { Route, Routes } from "react-router-dom";

// import Auth from "pages/Auth";
import Home from "pages/Home"
import { LoginForm, RegisterForm } from "modules";

export const App = () => {
  return (
    <div className="wrapper">  
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/im" element={<Home />} />
      </Routes>    
    </div>
  )
};
