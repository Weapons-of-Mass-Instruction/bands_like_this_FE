import React from 'react';
import MusicCarousel from './MusicCarousel';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// pass required data to MusicCarousel as props
// recs={this.props.recs}
//{
// favorite: true
// genre: "classic"
// match: 98
// name: "Dirty Randy and the Bois"
// search: "Nickleback"
// __v: 0
// _id: "624b8dcebe2a0b0109cfdb99"
// }


class MusicCard extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.recs.map((band, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>Bands like: {band.search}</Card.Title>
                  
                    <MusicCarousel recs={this.props.recs} />
                  
                  <Button>Favorite</Button>
                  {/* //Button must PUT to change the data in the data base */}
                  <Button>Delete</Button>
                  {/* //Must DELETE band from database */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}



export default MusicCard;

/* render a new card for each search query, and a new carousel item for each band within a card. 
<Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.numberOfHorns.map((beast, index) => (
              <Col key={index}>
                <HornedBeast
                  beast={beast}
                  title={beast.title}
                  name={beast.name}
                  image_url={beast.image_url}
                  description={beast.description}
                  horns={beast.horns}
                  key={index}
                  openModal={this.props.openModal}
                />
              </Col>
            ))}
          </Row>
        </Container>


*/