import React, { Component } from 'react'
import { Row, Card, Button, Container, Col, ListGroup, ListGroupItem, Modal, Table, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IndSessionForm from './IndSessionForm'




class TeacherProfile extends Component {

    constructor({ props }) {

        super(props)
        this.state = {
            modal: false,
            requestId: undefined,
        }


    }


    render() {
        return (

            <Container style={{paddingTop: '40px'}}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                           

                            <Image variant="top" src={this.props.user.teacherData.avatar} key={this.props.user._id} roundedCircle/>


                            <Card.Body>

                                <Card.Title>{this.props.user.teacherData.name}{this.props.user.teacherData.lastName}'s Profile</Card.Title>


                                <Card.Text>


                                    <h4>{this.props.user.role}</h4>
                                    <p>{this.props.user.teacherData.description}</p>
                                </Card.Text>
                                {/* <Button variant="primary"><Link to={`/beers/${this.props._id}`} style={{ color: 'white' }}>See more details</Link></Button> */}
                            </Card.Body>

                        </Card>
                    </Col>


                    <Col>
                        <h3>1 to 1 sessions:</h3>
                        {this.props.user.teacherData.individualEvent.map(elm =>

                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{elm.description}</td>
                                        <td>{elm.date}</td>
                                    </tr>
                                </tbody>
                            </Table>

                        )}

                        <hr></hr>
                        <h3>Group sessions:</h3>
                        {this.props.user.teacherData.groupEvent.map(elm =>
                            <>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{elm.description}</td>
                                            <td>{elm.date}</td>
                                        </tr>
                                    </tbody>
                                </Table>



                            </>
                        )}

                        <hr></hr>
                        <h3>Pending Requests:</h3>


                        {
                            this.props.request.map(elm =>
                                // { console.log(elm.teacher.teacherData.name, elm.student.studentData.name) }
                                // if ((elm.isAccepted = false) && (elm.isActive = true)) {
                                <>
                                    <ListGroup variant="flush" key={elm._id}>

                                        <ListGroup.Item ><strong>Requester:</strong> {elm.student.studentData.name}</ListGroup.Item>
                                        <ListGroup.Item ><strong>Message:</strong>  {elm.comment}</ListGroup.Item>
                                        <ListGroupItem>
                                            <Button onClick={() => this.setState({ modal: true, requestId: elm._id })} variant="primary" style={{ margin: '20px' }} requestId={elm._id}>Propose a session</Button>

                                            <Button onClick={this.handleApprove} variant="primary" style={{ margin: '20px' }}>Decline </Button>
                                        </ListGroupItem>

                                    </ListGroup>

                                    <Modal Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                        <Modal.Header>
                                            <Modal.Title>Make a request</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <IndSessionForm props={this.props} requestId={this.state.requestId} closeModal={() => this.setState({ modal: false })} />
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