import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Graph from './Reimb/Graph';
import AdminLogin from './components/adminlogin';
import AdminPage from './components/AdminPage';
import thanks from './components/thanks';



function App() {
 
  

  return (<Router>
    <div className="App ">
      <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/sign-in"}> <img src="./img/ERS.png" width="90" height="90" alt=""></img></Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        
          <div class="collapse navbar-collapse text-start" id="navbarCollapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          
        <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Employees</Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" to={"/adminlogin"}>Admin</Link>
              </li>
          </ul>
        </div>
        </div>
      </nav>

    
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/Graph" component={Graph} />
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/adminpage" component={AdminPage} />
            <Route path="/thanks" component={thanks} />
          </Switch>
      
    </div>
   </Router>
  );
  
}

export default App;