
import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../CSSfiles/meetTheTeam.css';

class TeamCarousel extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="teamCards">
              <Card.Img id="teamImgs" variant="top" src="img/ben.jpg" />
              <Card.Body>
                <Card.Title>Benjamin Carter</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button className="teamButtons" variant="primary" href="https://github.com/MotoBenny">Github</Button>
                <Button variant="success" href="https://www.linkedin.com/in/benjamin-carter-dev/">LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="teamCards">
              <Card.Img variant="top" src="img/cole.jpg" />
              <Card.Body>
                <Card.Title>Cole Gibbs</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button className="teamButtons" variant="primary" href="https://github.com/colegibbs">Github</Button>
                <Button className="teamButtons" variant="success" href="https://www.linkedin.com/in/cole-gibbs/">LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="teamCards">
              <Card.Img variant="top" src="img/ella.png" />
              <Card.Body>
                <Card.Title>Ella Svete</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button className="teamButtons" variant="primary" href="https://github.com/EllaSvete">Github</Button>
                <Button className="teamButtons" variant="success" href="https://www.linkedin.com/in/ellasvete/">LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="teamCards">
              <Card.Img variant="top" src="img/michelle.jpg" />
              <Card.Body>
                <Card.Title>Michelle Salazar</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button className="teamButtons" variant="primary" href="https://github.com/MISalz">Github</Button>
                <Button className="teamButtons" variant="success" href="https://www.linkedin.com/in/michellesalazar010/">LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="teamCards">
              <Card.Img variant="top" src="img/nathan.jpg" />
              <Card.Body>
                <Card.Title>Nathan Waters</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button className="teamButtons" variant="primary" href="https://github.com/Nathan-Waters">Github</Button>
                <Button className="teamButtons" variant="success" href="https://www.linkedin.com/in/nathan-waters123/">LinkedIn</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TeamCarousel;
