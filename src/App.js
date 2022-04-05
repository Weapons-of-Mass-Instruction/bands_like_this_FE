import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MusicRecs from './Main/MusicRecs';
import LoginPage from './Login/LoginPage';
import MeetTheTeam from './AboutUs/MeetTheTeam';
import Header from './Header';
import Footer from './Footer';
import './CSSfiles/app.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Header />
            <Route exact path="/login">
              {/* {this.props.authO.isAuthenticated
                ?
                <MusicRecs />
                :
                <LoginPage />
              } */}
              <LoginPage/>
              <MusicRecs/>
            </Route>
            <Route exact path="/meetTheTeam">
              <MeetTheTeam />
            </Route>
            <Footer />
          </Switch>
        </Router>
      </>
    );
  }

}


export default App;
