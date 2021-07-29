import './TeacherProfile.css'
import React, { Component } from 'react'
import { Row, Card, Button, Container, Col, ListGroup, ListGroupItem, Modal, Table, Image } from 'react-bootstrap'
import RequestsService from '../../../services/request.service';
import EditTeacherProfile from './EditTeacherProfile';
import IndSessionForm from './IndSessionForm';




class TeacherProfile extends Component {

    constructor({ props }) {

        super(props)
        this.state = {
            modal: false,
            requestId: undefined,
        }

        this.RequestsService = new RequestsService()
    }

    rejectRequest = (request_id) => {

        this.RequestsService
            .rejectRequest(request_id)
            .then(() => alert('request rejected'))
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Container style={{ paddingTop: '40px' }}>
                <Row>
                    <Col>
                        <Row>
                            <Col md={4}>

                                <Card.Body className="photoCard shadow-lg roundBox">

                                    <Image className="profilePhoto" variant="top" src={this.props.user.teacherData.avatar} key={this.props.user._id} roundedCircle />

                                    <Card.Title style={{ marginTop: '20px' }}>Welcome to your profile, {this.props.user.teacherData.name}</Card.Title>

                                    <Card.Text>
                                        <h4 style={{ marginTop: '20px' }}> You have a <b className="capitalize">{this.props.user.role}</b> account.</h4>

                                        <h5 style={{ marginTop: '20px' }}>About you:</h5>

                                        <p style={{ marginTop: '20px' }}>{this.props.user.teacherData.description}</p>
                                    </Card.Text>

                                </Card.Body>
                            </Col>
                        </Row>

                    </Col>

                    <Col>
                        <Card.Body className="shadow-lg roundBox roundCard">
                            <h3 className='formTitle text-center capitalize'>future sessions</h3>
                            {this.props.user.teacherData.individualEvent.map(elm =>
                                <>
                                    <p><b>Description:</b> {elm.description}</p>
                                    <p><b>When?</b> {elm.date}</p>
                                    <hr/>
                                </>
                            )}
                        </Card.Body>

                        <Card.Body className="shadow-lg roundBox roundCard">

                            <h3 className='formTitle text-center capitalize'>group sessions</h3>
                            {this.props.user.teacherData.groupEvent.map(elm =>
                                <>
                                    <p>Description: {elm.description}</p>
                                    <p>When? {elm.date}</p>
                                </>
                            )}
                        </Card.Body>

                    </Col>
                    <Row>
                        <Col>

                            <h3 className='formTitle text-center' >Pending Requests:</h3>

                            {
                                this.props.request.map(elm =>

                                    elm.isAccepted === false && elm.isActive === true ?
                                        <>
                                            <ListGroup key={elm._id}>

                                                <ListGroup.Item ><strong>Requester:</strong> {elm.student.studentData.name}</ListGroup.Item>
                                                <ListGroup.Item ><strong>Message:</strong>  {elm.comment}</ListGroup.Item>
                                                <ListGroupItem>
                                                    <Button onClick={() => this.setState({ modal: true, requestId: elm._id })} variant="outline-dark" style={{ margin: '20px' }} requestId={elm._id}>Propose a session</Button>

                                                    <Button onClick={() => this.rejectRequest(elm._id)} variant="outline-dark" style={{ margin: '20px' }}>Decline </Button>
                                                </ListGroupItem>

                                            </ListGroup>

                                            <Modal Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                                <Modal.Header>
                                                    <Modal.Title>Make a request</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <IndSessionForm props={this.props} updateProfile={this.props.updateProfile} requestId={this.state.requestId} closeModal={() => this.setState({ modal: false })} />
                                                </Modal.Body>
                                            </Modal>
                                        </>
                                        : null
                                )
                            }
                            <hr></hr>
                            <Button variant="outline-dark" onClick={() => this.setState({ showModal: true })}>Edit Profile</Button>
                            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                                <EditTeacherProfile handleAlert={this.props.handleAlert} profile={this.props.user} updateProfile={this.props.updateProfile} closeModal={() => this.setState({ showModal: false })} />
                            </Modal>
                        </Col>
                    </Row>
                </Row >
            </Container >
        )
    }
}

export default TeacherProfile
