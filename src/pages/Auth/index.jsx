import React from "react";
import Loginform from "modules/LoginForm/components/LoginForm";
import CheckEmailInfo from "./components/CheckInfo";
import { RegisterForm } from "modules";
import { Routes, Route } from "react-router-dom";

import './auth.scss'

const Auth = () => {
  return (   
    <section className="auth">
      <div className="auth__content"> 
      <Routes>
        <Route path='/signip' element={<Loginform/>}/>
        <Route path='/signup' element={<RegisterForm/>}/>
        <Route exact path="/signup/verify" component={<CheckEmailInfo/>} />
      </Routes> 
      </div>
    </section>

  )
}

export default Auth;