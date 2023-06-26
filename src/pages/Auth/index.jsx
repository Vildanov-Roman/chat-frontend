import React from "react";
import Loginform from "modules/LoginForm/components/LoginForm";
import { RegisterForm } from "modules";
import { Routes, Route } from "react-router-dom";

import './auth.scss'

const Auth = () => {
  return (   
    <section className="auth">
      <div className="auth__content"> 
      <Routes>
        <Route path='/login' element={<Loginform/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes> 
      </div>
    </section>

  )
}

export default Auth;