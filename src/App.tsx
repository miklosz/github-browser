import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// components
import UserView from './components/user/UserView'
import ListView from './components/list/ListView'

function App() {
  return (
    <div className="appRoot">
      <Router>

          <Switch>
            <Route exact path="/user/:id">
              <UserView />
            </Route>
            <Route exact path="/">
              <ListView />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
