import { Card, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventCard = ({ description,  _id, date, city }) => {

    return (
        <Col md={3}>
            <Card >
                <Container>
                    <Link to={`/events/${_id}`}  style={{ width: '100%' }}>
                    {/* <Card.Img variant="top" src={options[0].image} /> */}
                </Link>
                </Container>
                <Container className="product-caption">
                    <Card.Body>
                    <Card.Title style={{fontSize: '1em'}}>Class on {date}. ({city}) |</Card.Title>
                        <Card.Text style={{ fontSize: '1em' }}>Short description: {description}</Card.Text>
                </Card.Body>
                </Container>
            </Card>
        </Col>
    )
}

export default EventCard