import React from 'react'
import { Row, Card, Button, Container, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Spinner from '../../shared/Spinner'

const TeacherProfile = (user) => {


    return (

        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                       
                        <Card.Img variant="top" src={user.user.teacherData.avatar} key={user._id} />


                        <Card.Body>

                            <Card.Title>{user.user.teacherData.name}{user.user.teacherData.lastName}'s Profile</Card.Title>


                            <Card.Text>


                                <h4>{user.user.role}</h4>
                                <p>{user.user.teacherData.description}</p>
                            </Card.Text>
                            <Button variant="primary"><Link to={`/beers/${user._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                        </Card.Body>

                    </Card>
                </Col>


                <Col>
                    {user.user.teacherData.groupEvent.map(elm =>
                        <>
                            <h3>1 to 1 sessions</h3>
                            <ListGroup variant="flush">

                                <ListGroup.Item>{elm.date}</ListGroup.Item>

                            </ListGroup>
                            <h3>Group sessions</h3>
                            <ListGroup variant="flush">

                                <ListGroup.Item>{elm.description}</ListGroup.Item>

                            </ListGroup>
                        </>
                    )}

                    <hr></hr>
                    {/* {
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
                */}

                </Col>
            </Row>
        </Container >
    )
}

export default TeacherProfile