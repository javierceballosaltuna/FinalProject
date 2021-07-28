import React, { Component } from 'react'
import { Row, Card, Button, Container, Col, ListGroup, ListGroupItem, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IndSessionForm from './IndSessionForm'




class TeacherProfile extends Component {

    constructor({props}) {

        super(props)
        this.state = {
            modal: false
        }
        
        console.log(props)
    }
    

    render() {
        return (

            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <h1>hola</h1>

                            <Card.Img variant="top" src={this.props.user.teacherData.avatar} key={this.props.user._id} />


                            <Card.Body>

                                <Card.Title>{this.props.user.teacherData.name}{this.props.user.teacherData.lastName}'s Profile</Card.Title>


                                <Card.Text>


                                    <h4>{this.props.user.role}</h4>
                                    <p>{this.props.user.teacherData.description}</p>
                                </Card.Text>
                                <Button variant="primary"><Link to={`/beers/${this.props._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                            </Card.Body>

                        </Card>
                    </Col>


                    <Col>
                        <h3>1 to 1 sessions:</h3>
                        {this.props.user.teacherData.individualEvent.map(elm =>
                            <>


                                <ListGroup variant="flush" key={elm._id}>

                                    <ListGroup.Item key={elm._id}>{elm.date}</ListGroup.Item>
                                    <ListGroup.Item >{elm.description}</ListGroup.Item>

                                </ListGroup>


                            </>
                        )}

                        <hr></hr>
                        <h3>Group sessions:</h3>
                        {this.props.user.teacherData.groupEvent.map(elm =>
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
                            this.props.request.map(elm =>
                                // { console.log(elm.teacher.teacherData.name, elm.student.studentData.name) }
                                // if ((elm.isAccepted = false) && (elm.isActive = true)) {
                                <>
                                    <ListGroup variant="flush" key={elm._id}>

                                        <ListGroup.Item key={elm._id}>Requested by:{elm.student.studentData.name}</ListGroup.Item>
                                        <ListGroup.Item key={elm._id}> Comment:{elm.comment}</ListGroup.Item>
                                        <ListGroupItem>
                                            <Button onClick={() => this.setState({ modal: true }, {requestId:elm._id})} variant="primary" style={{ marginBottom: '20px' }} requestId={elm._id}>Propose a session</Button>
                                        
                                            <button onClick={this.handleApprove}>Decline</button>
                                        </ListGroupItem>

                                    </ListGroup>

                                    <Modal Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                        <Modal.Header>
                                            <Modal.Title>Make a request</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <IndSessionForm props={this.props}  requestId={this.props.request}  closeModal={() => this.setState({ modal: false })} />
                                        </Modal.Body>
                                    </Modal>
                                </>
                                // }
                            )

                        }


                    </Col>
                </Row>
            </Container >
        )
    }
}

export default TeacherProfile