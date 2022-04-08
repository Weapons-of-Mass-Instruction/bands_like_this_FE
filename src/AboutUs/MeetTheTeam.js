import React from 'react';
import '../CSSfiles/meetTheTeam.css';
import TeamCarousel from './TeamCarousel';

class MeetTheTeam extends React.Component {
  render() {
    return(
      <>
      <h1 id="h1Team">Meet the team!</h1>
      <TeamCarousel/>
      </>
    );
  }
}

export default MeetTheTeam;
