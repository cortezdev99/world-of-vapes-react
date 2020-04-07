import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/layout/Footer'
import JuiceDetails from './components/juices/JuiceDetails'
import GlassDetails from './components/glass/GlassDetails'
import DevicesDetails from './components/devices/DevicesDetails'
import SignIn from './components/auth/SignIn';
import CreateJuice from './components/juices/CreateJuice'
import CreateGlass from './components/glass/CreateGlass';
import CreateDevices from './components/devices/CreateDevices';
import DevicesDashboard from './components/devices/DevicesDashboard'
import GlassDashboard from './components/glass/GlassDashboard'
import JuiceDashboard from './components/juices/JuiceDashboard'

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
              <Route path='/devices' component={DevicesDashboard} />
              <Route path='/glass' component={GlassDashboard} />
              <Route path='/juice' component={JuiceDashboard} />
              <Route path='/auth' component={SignIn} />
              <Route path='/createjuice' component={CreateJuice} />
              <Route path='/createglass' component={CreateGlass} />
              <Route path='/createdevice' component={CreateDevices} />
            </Switch>
          <Footer />
        </div>
     </Router>
    );
  }
}

export default App;
