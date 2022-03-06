import React  from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import Container from '@mui/material/Container';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Landing from './pages/Landing';

class App extends React.PureComponent {
  render() {
    return (
      <><Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/Profile' component={Profile} />
          </Switch>
        </div>
      </Router><div className="App">
        </div></>
    )
  }
}

export default App;