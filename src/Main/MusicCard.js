/* eslint-disable no-undef */
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import MusicCarousel from './MusicCarousel.js';
import '../CSSfiles/musicCarousel.css';
import Loading from './Loading.js';

class MusicCard extends React.Component {

  deleteClick = (band) => {
    this.props.findBandToDelID(band);
  };

  favoriteClick = (band) => {
    this.props.findBandToFav(band);
  };

  render() {
    let cards = this.props.bandCard.map((band, index) => {
      let bandRecs = this.props.recs.filter((singleRec) => singleRec.search === band);
      return (
        <Container className='cardContainer'>
          <Row>
            <Col>
              <Card className="recCard," key={index}>
                <Card.Body>
                  <Card.Title>Bands like: {band}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <MusicCarousel recs={bandRecs} />
                  <Button onClick={() => this.favoriteClick(band)}>Favorite</Button>
                  <Button onClick={() => this.deleteClick(band)}>Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )
    })

    return (
      <>
        {this.props.loadingState ? (
          <Loading />
        ) : null}
        <div className='cardsDiv'>
          {cards}
        </div>
      </>
    );
  }
}

export default MusicCard;
