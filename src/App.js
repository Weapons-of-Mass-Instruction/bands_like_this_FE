import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MusicRecs from './Main/MusicRecs';
import LoginPage from './Login/LoginPage';
import MeetTheTeam from './AboutUs/MeetTheTeam';
import Header from './Header';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import './CSSfiles/app.css';

class App extends React.Component {
  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated ?
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <MusicRecs />
              </Route>
              <Route exact path="/meet-the-team">
                <MeetTheTeam />
              </Route>
            </Switch>
            <Footer />
          </Router>
          :
          <LoginPage />
        }
      </>
    );
  }
}

export default withAuth0(App);

