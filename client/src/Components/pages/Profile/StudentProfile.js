import React from 'react'
import { Row, Card, Button, Container, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import Spinner from '../../shared/Spinner'

const StudentProfile = (user) => {


    return (
        <>

        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }} key={user.user._id}>
                        <Card.Body>

                            <Card.Title>{user.user.studentData.name} {user.user.studentData.lastName}'s Profile</Card.Title>


                            <Card.Text>


                                <h4>{user.user.role}</h4>
                                <p>{user.user.studentData.description}</p>
                            </Card.Text>
                            <Button variant="primary"><Link to={`/beers/${user.user._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>

                    {user.user.studentData.individualEvent.map(elm =>
                        <>
                            <h3>1 to 1 sessions</h3>
                            <ListGroup variant="flush">

                                <ListGroup.Item>{elm.studentData.individualEvent}</ListGroup.Item>

                            </ListGroup>
                            <h3>Group sessions</h3>
                            <ListGroup variant="flush">

                                <ListGroup.Item>{elm.studentData.groupEvent}</ListGroup.Item>

                            </ListGroup>
                        </>
                    )}

                    <hr></hr>
                    
                        {/* // user.map(elm => {

                        //     <>
                        //         <h3>Requests</h3>
                        //         <ListGroup variant="flush">

                        //             <ListGroup.Item>{elm.student}: "{elm.comment}"</ListGroup.Item>

                        //         </ListGroup>

                        //     </>

                        
                        
                    }) */}

                </Col>
            </Row>
            </Container>
            </>
    )
}

export default StudentProfile