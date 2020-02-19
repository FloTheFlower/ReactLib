import React, { Component, Fragment } from "react";
import EventDashboard from "./event/EventDashboard/EventDashboard";
import NavBar from "./features/nav/Navbar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <h1>Gurkenman</h1>
        <Fragment>
          <NavBar />
          <Container className="main">
            <Route path ='/events' component={EventDashboard} />
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default App;
