import React from "react";
import { Link } from "react-router-dom";



function LoginButton({pathname, text}) {

    function setRole(){
        localStorage.setItem("role", text);
    }
    if(text === localStorage.role){
        return (
            <div>
                <Link to={{pathname: pathname}} onClick={setRole}>
                    <button className="button is-link">Go To {text} Links</button>
                </Link>
            </div>
        );
    }

    return (
      <div>
        <Link to={{pathname: pathname}} onClick={setRole}>
            <button className="button is-primary">{text}</button>
        </Link>
      </div>
    );
  }

export default LoginButton;