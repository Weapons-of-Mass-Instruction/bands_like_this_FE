import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MusicRecs from './Main/MusicRecs';
import LoginPage from './Login/LoginPage';
import MeetTheTeam from './AboutUs/MeetTheTeam';
import Header from './Header';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import './CSSfiles/app.css';
import LogoutButton from './Main/LogoutButton';
import LoginButton from './Login/LoginButton';

class App extends React.Component {
  render() {
    return (
      <>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated
                  ?
                  <LogoutButton />
                  :
                  <LoginButton />
                }
                <LoginPage />
                <MusicRecs />
              </Route>
              <Route exact path="/meetTheTeam">
                <MeetTheTeam />
              </Route>
            </Switch>
            <Footer />
          </Router>
      </>
    );
  }

}


export default withAuth0(App);
