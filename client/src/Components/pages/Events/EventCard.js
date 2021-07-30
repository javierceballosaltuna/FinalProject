import { Card, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventCard = ({ description, _id, date, city }) => {

    return (
        <Col md={3}>
            <Card.Body className="loginCard shadow-lg roundBox">
                <Container className="product-caption">
                        <Card.Title style={{ fontSize: '1.2em', marginTop: '20px' }}>Remember the date!     It is on <b>{date.slice(8, 10)}/{date.slice(5, 7)}/{date.slice(0, 4)}</b></Card.Title>
                        <Card.Title style={{ fontSize: '0.9em', marginTop: '20px' }}>The event will take place in <b>{city}</b>.</Card.Title>
                        <Card.Text style={{ fontSize: '0.7em', marginTop: '20px' }}>Short description: {description}</Card.Text>
                </Container>
                <Container>
                    <Link to={`/events/details/${_id}`} style={{ width: '100%' }}>
                    <Button className="roundBox mainButton" style={{ marginTop: '20px', width: '100%', marginBottom: '30px' }} variant="outline-dark">See details</Button>
                    </Link>
                </Container>
                </Card.Body>
        </Col>
    )
}

export default EventCard