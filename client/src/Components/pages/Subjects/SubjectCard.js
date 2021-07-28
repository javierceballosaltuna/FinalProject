import { Card, Col, Container, Button, Image, Modal } from 'react-bootstrap';
import RequestAClassForm from './RequestAClassForm';
import React, { Component } from 'react'
// import { Button } from 'react-router-dom'

class SubjectCard extends Component {


    constructor(props) {

        super(props)
        this.state = {
            modal: false,
        }
        console.log(this.props)
    }

    render() {

        return (
            <>
                <Col md={6}>
                    <Card >
                        <Container className="product-caption">
                            <Card.Body>
                                <Image src={this.props.avatar} rounded />
                                <Card.Title style={{ fontSize: '1em' }}>Request a class with {this.props.name} {this.props.lastName} </Card.Title>
                                <Card.Text style={{ fontSize: '1em' }}> Subject: <strong>[{this.props.subject}]</strong>
                                    <hr></hr>    {this.props.description}</Card.Text>
                                <hr></hr>
                                <Button onClick={() => this.setState({ modal: true })} variant="primary" style={{ marginBottom: '20px' }}>Request</Button>

                            </Card.Body>
                        </Container>
                    </Card>
                </Col>

                <Modal Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                    <Modal.Header>
                        <Modal.Title>Make a request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RequestAClassForm teacher={this.props.name} teacherId={this.props._id} student={this.props.student} refreshSubjects={this.getAllSubjects} closeModal={() => this.setState({ modal: false })} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default SubjectCard