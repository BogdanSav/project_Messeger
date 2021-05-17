import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route , Redirect} from "react-router-dom";
import {SingUpComponent} from "./components";
import {ForgotPassword} from "./components";
import {LoginComponent} from './components';

const App: React.FC =()=> {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/signup">
            <SingUpComponent/>
          </Route>
          <Route path="/login">
              <LoginComponent/>
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
