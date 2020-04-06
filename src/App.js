import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/layout/Footer'

class App extends Component {
  render() {
    return (
     <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact to='/' component={Dashboard} />
            </Switch>
          <Footer />
        </div>
     </Router>
    );
  }
}

export default App;
