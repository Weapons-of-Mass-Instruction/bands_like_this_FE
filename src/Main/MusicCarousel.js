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

// {this.props.recs.forEach((band) => (
//   <Carousel.Item>
//     <img
//     className="d-block w-100"
//     src="holder.js/400x300?text=First slide&bg=373940"
//     alt={band.name}
//     />
//     <Carousel.Caption>
//       <h3>Oh look a carousel {band.name}</h3>
//       <p>Genre: {band.genre} </p>
//     </Carousel.Caption>
//   </Carousel.Item>
// ))}
{/* properly mapped data as carousel items// */ }
