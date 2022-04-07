import React from 'react';
import { Carousel } from 'react-bootstrap';
// import styles from './CSSfiles/musicCarousel.css';

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

class MusicCarousel extends React.Component {

  render() {
    let recCards = this.props.recs.map((rec, index) => {

        return (
          <Carousel.Item key={index}>
          <img
            className='carouselImage'
            src={rec.img}
            alt={rec.name}
          />
          <Carousel.Caption>
            <h3>{rec.name}</h3>
            <p>Genre: {rec.genre} </p>
          </Carousel.Caption>
        </Carousel.Item>
        )
      })

    return (
      <>
        <Carousel key={this.props.recs[0].name}>
          {recCards}
        </Carousel>
      </>
    );
  }
}

export default MusicCarousel;
