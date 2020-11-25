import React from "react";
import { Link } from "react-router-dom";



function SignOutButton() {

    function setRole(){
        localStorage.setItem("role", "");
    }

    return (
      <div>
        <Link to={{pathname: "/"}} onClick={setRole}>
            <button className="button is-danger">Sign Out</button>
        </Link>
      </div>
    );
  }

export default SignOutButton;