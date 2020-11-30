import React from "react";
import LoginButton from "../Component/loginButton";
import SignOutButton from "../Component/SignOutButton";

function isSignedin(){
  if(localStorage.role !== ""){
      return <SignOutButton/>
  }
}

function Login(props) {
  return (
    <div className="container">
      <div className="tile section">
        <div className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Select A Role to Login
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section container">
        <div className="columns">
          <div className="column">
            <LoginButton pathname="/admin" text="ADMIN"/>
          </div>
          <div className="column">
            <LoginButton pathname="/financeadmin" text="FINANCE_ADMIN"/>
          </div>
          <div className="column">
            <LoginButton pathname="/salesadmin" text="SALES_ADMIN"/>
          </div>
          <div className="column">
            <LoginButton pathname="/hradmin" text="HR_ADMIN"/>
          </div>
          <div className="column">
            <LoginButton pathname="/techadmin" text="TECH_ADMIN"/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {isSignedin()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;