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
import Search from './components/shared/Search';
import testData from './tests/testData.json'

function App() {
  return (
    <div className="appRoot">
      <header>
        <Search />
      </header>
      <main>
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

      </main>
    </div>
  );
}

export default App;
