/* eslint-disable no-undef */
import React from 'react';
//import MusicCarousel from './MusicCarousel';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import MusicCarousel from './MusicCarousel';

// pass required data to MusicCarousel as props
// recs={this.props.recs}
//[
// {
// favorite: true
// genre: "classic"
// match: 98
// name: "Dirty Randy and the Bois"
// search: "Nickleback"
// __v: 0
// _id: "624b8dcebe2a0b0109cfdb99"
// }
// {
// favorite: true
// genre: "classic"
// match: 98
// name: "The second band"
// search: "The Cure"
// __v: 0
// _id: "783b8fcebe2a0b0499cgyi82"
// }
//]

//['pup','the cure'] bandCard

class MusicCard extends React.Component {

  render() {


    let cards = this.props.bandCard.map((band, index) => {
    let bandRecs = this.props.recs.filter((singleRec) => singleRec.search === band);
    console.log(bandRecs);
      return (
        <Card key={index}>
          <Card.Body>
            <Card.Title>Bands like: {band}</Card.Title>
            <Card.Text>
            </Card.Text>
              <MusicCarousel recs={bandRecs} />

            <Button>Favorite</Button>
            {/* //Button must PUT to change the data in the data base */}
            <Button>Delete</Button>
            {/* //Must DELETE band from database */}
          </Card.Body>
        </Card>
      )
    })

    console.log('bandCard prop: ', this.props.bandCard);
    console.log('recs prop: ', this.props.recs)
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
