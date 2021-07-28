import React from 'react'
import { Row, Card, Button, Container, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const TeacherProfile = (user) => {

    console.log(user)
    return (

        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <h1>hola</h1>

                        <Card.Img variant="top" src={user.user.teacherData.avatar} key={user.user._id} />


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
                    <h3>1 to 1 sessions:</h3>
                    {user.user.teacherData.individualEvent.map(elm =>
                        <>


                            <ListGroup variant="flush" key={elm._id}>

                                <ListGroup.Item key={elm._id}>{elm.date}</ListGroup.Item>
                                <ListGroup.Item >{elm.description}</ListGroup.Item>

                            </ListGroup>


                        </>
                    )}

                    <hr></hr>
                    <h3>Group sessions:</h3>
                    {user.user.teacherData.groupEvent.map(elm =>
                        <>


                            <ListGroup variant="flush" key={elm._id}>

                                <ListGroup.Item key={elm._id}>{elm.date}</ListGroup.Item>
                                <ListGroup.Item >{elm.description}</ListGroup.Item>

                            </ListGroup>


                        </>
                    )}

                    <hr></hr>
                    <h3>Individual Session Requests:</h3>


                    {
                        user.request.map(elm => 
                            // { console.log(elm.teacher.teacherData.name, elm.student.studentData.name) }
                            // if ((elm.isAccepted = false) && (elm.isActive = true)) {

                                <ListGroup variant="flush" key={elm._id}>

                                    <ListGroup.Item key={elm._id}>{elm.teacher.teacherData.name}: "{elm.comment}"</ListGroup.Item>

                                </ListGroup>


                            // }
                        )

                    }


                </Col>
            </Row>
        </Container >
    )
}

export default TeacherProfile