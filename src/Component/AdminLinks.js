import { Link } from "react-router-dom";

function AdminLinks({role}) {
    const myRole = role;

    const myMap = {
        "ADMIN" : ["Manage User Accounts", "Assign Roles", "Help Desk"],
        "FINANCE_ADMIN": ["Finance Reports", "Accounts Payable", "Accounts Receivable", "Tax"],
        "SALES_ADMIN": ["Sales Reports", "Sales Leads", "Sales Demo"],
        "HR_ADMIN": ["New Hire On-borading", "Benefits", "Payroll", "Off-boarding", "HR Reports"],
        "TECH_ADMIN": ["Application Monitoring", "Tech Support", "App Development", "App Admin", "Release Management"]
    };

    if(localStorage.role.split("_").join("").toLowerCase() !== window.location.href.split("/")[3]){
        console.log(localStorage.role.split("_").join("").toLowerCase());
        console.log(window.location.href);
        return <div className="container">You Do Not Have Access</div>
    }

    return (
      <div>
          {myMap[myRole].map((link) => 
            <div className="container">
                <Link to={{pathname: link.split(" ").join("")}}>
                    {link}
                </Link>
            </div>
            )
          }
      </div>
    );
  }

  export default AdminLinks;