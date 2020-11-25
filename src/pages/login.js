import React from "react";
import LoginButton from "../Component/loginButton";


function Login(props) {
  return (
    <div className="tile container">
      <div className="hero section">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Select Roles:
          </h1>
        </div>
      </div>
    </div>
        <div className="buttons section">
          <LoginButton pathname="/admin" text="ADMIN"/>
          <LoginButton pathname="/financeadmin" text="FINANCE_ADMIN"/>
          <LoginButton pathname="/salesadmin" text="SALES_ADMIN"/>
          <LoginButton pathname="/hradmin" text="HR_ADMIN"/>
          <LoginButton pathname="/techadmin" text="TECH_ADMIN"/>
        </div>
      
      
    </div>
  );
}

export default Login;