/* eslint-disable no-undef */
import React from 'react';
//import MusicCarousel from './MusicCarousel';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import MusicCarousel from './MusicCarousel.js';
import '../CSSfiles/musicCarousel.css';


class MusicCard extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     bandToDel: ''
  //   }
  // }

  deleteClick = (band) => {
    this.props.findBandToDelID(band);
  };

  favoriteClick = (band) => {
    this.props.findBandToFav(band);
  };

  render() {
    // TODO to add functionality to delete card. Deleting card should filter through bandCard prop and delete band name from array (.pop) this delete method is located in MusicRecs.js

    let cards = this.props.bandCard.map((band, index) => {
    let bandRecs = this.props.recs.filter((singleRec) => singleRec.search === band);
      return (
        <Card key={index}>
          <Card.Body>
            <Card.Title>Bands like: {band}</Card.Title>
            <Card.Text>
            </Card.Text>
              <MusicCarousel recs={bandRecs} />

            <Button onClick={() => this.favoriteClick(band)}>Favorite</Button>
            {/* //Button must PUT to change the data in the data base */}
            <Button onClick={() => this.deleteClick(band)}>Delete</Button>
            {/* //Must DELETE band from database */}
          </Card.Body>
        </Card>
      )
    })


    return (
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          <Col>
            {cards}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MusicCard;
