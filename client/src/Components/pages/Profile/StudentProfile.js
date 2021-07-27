import React from 'react'
import { Row, Card, Button, Container, Col, Im } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Spinner from '../../shared/Spinner'

const StudentProfile = (user) => {


    return (

        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>

                            <Card.Title>{user.user.studentData.name}{user.user.studentData.lastName}'s Profile</Card.Title>


                            <Card.Text>


                                <h4>{user.user.role}</h4>
                                <p>{user.user.studentData.description}</p>
                            </Card.Text>
                            <Button variant="primary"><Link to={`/beers/${user.user._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                        </Card.Body>

                    </Card>
                </Col>

                {/* <Col>

                    {this.state.user.map(elm =>
                        <>
                            <h3>1 to 1 sessions</h3>
                            <ListGroup variant="flush">

                                <ListGroup.Item>{elm[0].teacherData.individualEvent}</ListGroup.Item>

                            </ListGroup>
                            <h3>Group sessions</h3>
                            <ListGroup variant="flush">

                                <ListGroup.Item>{elm[0].teacherData.groupEvent}</ListGroup.Item>

                            </ListGroup>
                        </>
                    )}

                    <hr></hr>
                    {
                        this.state.request.map(elm => {

                            <>
                                <h3>Requests</h3>
                                <ListGroup variant="flush">

                                    <ListGroup.Item>{elm[1].student}: "{elm[1].comment}"</ListGroup.Item>

                                </ListGroup>

                            </>

                        }
                        )
                    }

                </Col> */}
            </Row>
        </Container>
    )
}

export default StudentProfile