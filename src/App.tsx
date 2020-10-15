import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import UserView from './components/user/UserView'
import ListView from './components/list/ListView'
// import Search from './components/shared/Search';

function App() {
  return (
    <div className="appRoot">
        <Router>
          <Switch>
            <Route exact path="/user/:login">
              <UserView />
            </Route>
            <Route path="/:page?">
              <ListView />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}


export default App;
