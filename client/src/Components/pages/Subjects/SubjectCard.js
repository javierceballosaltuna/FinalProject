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
                
                    <Container className="product-caption" style={{textAlign: 'center', paddingTop: '50px'}}>
                        <Card style={{width: '250px'}} >

                            <Card.Body>
                                <Image src={this.props.avatar} className={'img-circle'} style={{ width: ' 150px' }} />
                                <Card.Title style={{ fontSize: '1em' }}><strong>{this.props.name} {this.props.lastName} </strong></Card.Title>
                                <Card.Text style={{ fontSize: '1em' }}>  <strong>[{this.props.subject}]</strong>
                                    <hr></hr>    {this.props.description}</Card.Text>
                                <hr></hr>
                                <Button onClick={() => this.setState({ modal: true })} variant="primary" style={{ marginBottom: '20px' }}>Request</Button>

                            </Card.Body>

                        </Card>
                    </Container>
               

                <Modal Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                    <Modal.Header style={{ alignSelf: 'center'}}>
                        <Modal.Title >Contact Form</Modal.Title>
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