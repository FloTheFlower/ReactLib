import React, {Component} from 'react';
import EventDashboard from './event/EventDashboard/EventDashboard';
import NavBar from './features/nav/Navbar/NavBar';


class App extends Component {
  render() {
  return (
    <div>
    <h1>Gurkenman</h1>
  <EventDashboard />
  <NavBar />
        </div>
  )
  }
}

export default App;
