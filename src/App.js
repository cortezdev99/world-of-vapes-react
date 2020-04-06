import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/layout/Footer'
import JuiceDetails from './components/juices/JuiceDetails'
import GlassDetails from './components/glass/GlassDetails'
import DevicesDetails from './components/devices/DevicesDetails'

class App extends Component {
  render() {
    return (
     <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/juices/:id' component={JuiceDetails} />
              <Route path='/glass/:id' component={GlassDetails} />
              <Route path='/devices/:id' component={DevicesDetails} />
            </Switch>
          <Footer />
        </div>
     </Router>
    );
  }
}

export default App;
