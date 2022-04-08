/* eslint-disable no-undef */
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import MusicCarousel from './MusicCarousel.js';
import '../CSSfiles/musicCarousel.css';


class MusicCard extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      fav: false
    }
  }


  deleteClick = (band) => {
    this.props.findBandToDelID(band);
  };

  favoriteClick = (band) => {
    // this.props.findBandToFav(band);
    this.props.addToFavRecs(this.props.recs);
    if(this.state.fav){
      this.setState({
        fav: false
      })
    } else{
      this.setState({
        fav: true
      })
    };
  };

  render() {


    let cards = this.props.bandCard.map((band, index) => {
      let bandRecs = this.props.recs.filter((singleRec) => singleRec.search === band);
      return (

        <Container className='cardContainer'>
          <Row>
            <Col>
              <Card className="recCard" key={index}>
                <Card.Body>
                  <Card.Title>Bands like: {band}{this.state.fav ? "⭐" : null}</Card.Title>
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
        <div className='cardsDiv'>
          {cards}
        </div>
      </>
    );
  }
}

export default MusicCard;

//  xs={1} sm={2} md={3} lg={4}