import { Card, Col, Container, Button, Image } from 'react-bootstrap'
// import { Button } from 'react-router-dom'

const SubjectCard = ({ description, _id, name, lastName, subject, avatar }) => {

    return (
        
        <Col md={6}>
            <Card >
                <Container className="product-caption">
                    <Card.Body>
                        <Image src={avatar} rounded />
                        <Card.Title style={{ fontSize: '1em' }}>Request a class with {name} {lastName} </Card.Title>
                        <Card.Text style={{ fontSize: '1em' }}> Subject: <strong>[{subject}]</strong> 
                        <hr></hr>    {description}</Card.Text>
                        
                    </Card.Body>
                </Container>
            </Card>
        </Col>
    )
}

export default SubjectCard