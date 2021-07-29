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

            <Container style={{
                paddingTop: '40px',
            }}>
                <Row>
                    <Col>
                        <Card style={{
                            width: '18rem',
                            borderBottom: 'solid 3px blue',
                            background: '#fcf799',
                            color: 'grey',
                            fontFamily: 'var(--bs-font-sans-serif)'
                        }}>


                            <Image variant="top" src={this.props.user.teacherData.avatar} key={this.props.user._id} roundedCircle />


                            <Card.Body>

                                <Card.Title>{this.props.user.teacherData.name}{this.props.user.teacherData.lastName}'s Profile</Card.Title>


                                <Card.Text>
                                    <h4>{this.props.user.role}</h4>
                                    <p>{this.props.user.teacherData.description}</p>
                                </Card.Text>

                            </Card.Body>

                        </Card>
                        <hr></hr>
                        <Button variant="outline-info" onClick={() => this.setState({ showModal: true })}>Edit Profile</Button>
                        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                            <EditTeacherProfile handleAlert={this.props.handleAlert} profile={this.props.user} updateProfile={this.props.updateProfile} closeModal={() => this.setState({ showModal: false })} />
                        </Modal>
                    </Col>


                    <Col>
                        <h3>Future sessions:</h3>
                        {this.props.user.teacherData.individualEvent.map(elm =>

                            <Table style={{
                                borderBottom: 'solid 3px blue',
                                background: '#fcf799',
                                color: 'grey',
                                fontFamily: 'var(--bs-font-sans-serif)'
                            }}>
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
                                <Table style={{
                                    borderBottom: 'solid 3px blue',
                                    background: '#fcf799',
                                    color: 'grey',
                                    fontFamily: 'var(--bs-font-sans-serif)'
                                }}>
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

                                elm.isAccepted === false && elm.isActive === true ?
                                    <>
                                        <ListGroup style={{

                                            background: '#fcf799',
                                            color: 'grey',
                                            fontFamily: 'var(--bs-font-sans-serif)'
                                        }} variant="flush" key={elm._id}>

                                            <ListGroup.Item ><strong>Requester:</strong> {elm.student.studentData.name}</ListGroup.Item>
                                            <ListGroup.Item ><strong>Message:</strong>  {elm.comment}</ListGroup.Item>
                                            <ListGroupItem>
                                                <Button onClick={() => this.setState({ modal: true, requestId: elm._id })} variant="primary" style={{ margin: '20px' }} requestId={elm._id}>Propose a session</Button>

                                                <Button onClick={() => this.rejectRequest(elm._id)} variant="primary" style={{ margin: '20px' }}>Decline </Button>
                                            </ListGroupItem>

                                        </ListGroup>

                                        <Modal Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                                            <Modal.Header>
                                                <Modal.Title>Make a request</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <IndSessionForm props={this.props} updateProfile={ this.props.updateProfile}requestId={this.state.requestId} closeModal={() => this.setState({ modal: false })} />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                    : null
                            )

                        }


                    </Col>
                </Row >
            </Container >
        )
    }
}

export default TeacherProfile
