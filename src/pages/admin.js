import { useEffect } from "react";
import AdminLinks from "../Component/AdminLinks";
import SignOutButton from "../Component/SignOutButton";



function Admin(props){

    useEffect(() => {window.onpopstate = e => {localStorage.setItem("role", "")}})

    if(localStorage.role === ""){
        return <div className="container">You Do Not Have Access</div>
    }

    return (
      <div className="tile container">
        <div className="hero section">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Select Link:
            </h1>
          </div>
        </div>
      </div>
          <div className="buttons section">
              <AdminLinks role={localStorage.role}/>
          </div>
          <div>
              <SignOutButton/>
          </div>
      </div>
    );
  }

export default Admin;