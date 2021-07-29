import { Card, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventCard = ({ description, _id, date, city }) => {

    return (
        <Col md={3}>
            <Card >
                <Container>
                    <Link to={`/events/details/${_id}`} style={{ width: '100%' }}>
                        <Button variant="dark" block >See details</Button>
                    </Link>
                </Container>
                <Container className="product-caption">
                    <Card.Body>
                        <Card.Title style={{ fontSize: '1em' }}>Class on {date}. {city} |</Card.Title>
                        <Card.Text style={{ fontSize: '1em' }}>Short description: {description}</Card.Text>
                    </Card.Body>
                </Container>
            </Card>
        </Col>
    )
}

export default EventCard