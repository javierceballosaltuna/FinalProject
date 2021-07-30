import './StudentProfile.css'
import React, { Component } from 'react'
import { Row, Card, Button, Container, Col, Modal } from 'react-bootstrap'
import EditStudentProfile from './EditStudentProfile'


class StudentProfile extends Component {

    constructor({ props }) {

        super(props)
        this.state = {
            modal: false,
            requestId: undefined,
        }
    }
    render() {
        return (

            <Container style={{ paddingTop: '40px' }}>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="shadow-lg roundBox roundCard">
                            <Card.Body key={this.props.user._id}>

                                <Card.Title>{this.props.user.studentData.name} {this.props.user.studentData.lastName}'s Profile</Card.Title>

                                <Card.Text>
                                    <h4 style={{ marginTop: '20px' }}> You have a <b className="capitalize">{this.props.user.role}</b> account.</h4>

                                    <h5 style={{ marginTop: '20px' }}>About you:</h5>

                                    <p style={{ marginTop: '20px' }}>{this.props.user.studentData.description}</p>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md={8}>
                    <Card.Body className="shadow-lg roundBox roundCard">
                            <Card.Title>
                                <h3 className='formTitle text-center capitalize'>Future sessions</h3>
                            </Card.Title>
                            {this.props.user.studentData.individualEvent.map(elm =>
                                <>
                                    <p key={elm._id}><b>Description:</b> {elm.description}</p>
                                    <p><b>When?</b> {elm.date}</p>
                                    <hr />
                                </>
                            )}
                        </Card.Body>
                        <Card.Body className="shadow-lg roundBox roundCard">
                        <Card.Title>
                            <h3 className='formTitle text-center capitalize'>Group sessions</h3>
                            </Card.Title>
                            {this.props.user.studentData.groupEvent.map(elm =>
                                <>
                                    <p><b>Description:</b> {elm.description}</p>
                                    <p><b>When?</b> {elm.date.substring(0, 10)}</p>
                                    <hr />
                                </>
                            )}
                        </Card.Body>
                        
                    </Col>

                    <Col md={4}>
                        
                        <Button variant="outline-dark" onClick={() => this.setState({ showModal: true })}>Edit Profile</Button>
                        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                            <EditStudentProfile handleAlert={this.props.handleAlert} profile={this.props.user} updateProfile={this.props.updateProfile} closeModal={() => this.setState({ showModal: false })} />
                        </Modal>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default StudentProfile