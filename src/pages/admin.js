import AdminLinks from "../Component/AdminLinks";
import SignOutButton from "../Component/SignOutButton";


function Admin(props){


    if(localStorage.role === ""){
        return <div className="container">You Do Not Have Access</div>
    }

    return (
    <div>
      <div className="tile section">
        <div className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Select A Link
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section container">
        <AdminLinks role={localStorage.role}/>
          <div className="columns">
              <div className="column">
                <SignOutButton/>
              </div>
          </div>
      </div>
    </div>
    );
  }

export default Admin;