import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import Reimbursement from './components/reimbursement';
import AdminLogin from './components/adminlogin';
import Dashboard from './components/dashboard';
import Preferences from './components/preferences';
import useToken from './useToken';

function App() {
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }
   
  return (<Router>
    <div className="App ">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/sign-in"}>ERS</Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Log in</Link>
              </li>
            
           
             
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/reimbursement"}>Reimbursements</Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" to={"/adminlogin"}>Admin</Link>
              </li>
          </ul>
        </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/reimbursement" component={Reimbursement} />
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/preferences" component={Preferences}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;