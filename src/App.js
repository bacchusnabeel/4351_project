import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/admin";

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/financeadmin" component={Admin}/>
            <Route exact path="/salesadmin" component={Admin}/>
            <Route exact path="/hradmin" component={Admin}/>
            <Route exact path="/techadmin" component={Admin}/>
          </div>
        </Router>
    </div>
  );
}

export default App;
