import React from 'react';
import MusicCarousel from './MusicCarousel';
import { Card, Button } from 'react-bootstrap';

// pass required data to MusicCarousel as props

class MusicCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Search Query</Card.Title>
          <MusicCarousel />
          <Button>Favorite</Button>
          {/* //Button must PUT to change the data in the data base */}
          <Button>Delete</Button>
          {/* //Must DELETE band from database */}
        </Card.Body>
      </Card>
    );
  }
}


export default MusicCard;
