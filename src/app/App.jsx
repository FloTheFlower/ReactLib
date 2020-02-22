import React, { Component, Fragment } from "react";
import EventDashboard from "./event/EventDashboard/EventDashboard";
import NavBar from "./features/nav/Navbar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomePage } from "./event/home/HomePage";
import  EventDetailedPage  from "./event/EventDetailed/EventDetailedPage";
import { PeopleDashboard } from "./event/User/PeopleDashBoard/PeopleDashboard";
import { SettingsDashboard } from "./event/Settings/SettingsDashboard";
import EventForm from "./event/EventForm/EventForm";
import { UserDetailedPage } from "./event/UserDetailed/UserDetailedPage";
import TestComponent from "./features/nav/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path={["/createEvent", '/manage/:id']} component={EventForm} />
                <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
