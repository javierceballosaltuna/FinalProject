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
        
    }

    render() {

        return (
            <>
                
                    <Container style={{textAlign: 'center', paddingTop: '50px'}}>
                        <Card className='roundBox shadow-lg'style={{width: '250px', backgroundColor:'#fcf799'}} >

                            <Card.Body>
                                <Image src={this.props.avatar} className={'img-circle'} style={{ width: ' 150px', marginBottom: '30px' }} roundedCircle/>
                                <Card.Title style={{ fontSize: '1em' }}><strong>{this.props.name} {this.props.lastName} </strong></Card.Title>
                                <Card.Text style={{ fontSize: '1em' }}>  <strong className="capitalize">{this.props.subject} Teacher</strong>
                                    <hr></hr>    {this.props.description}</Card.Text>
                                <hr></hr>
                            <Button className="roundBox subjectButton" onClick={() => this.setState({ modal: true })} style={{ marginBottom: '20px'}}>Request</Button>

                            </Card.Body>

                        </Card>
                    </Container>
               

                <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
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