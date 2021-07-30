import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RequestsService from '../../../services/request.service';


class IndSessionForm extends Component {

    constructor(props) {


        super(props)
        this.state = {

            date: '',
            description: '',
            street: '',
            zipCode: '',
            city: '',
            country: '',
            alert: {
                show: false,
                text: ' '
            }
        }
        console.log(props);
        this.RequestService = new RequestsService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.RequestService

            .approveRequest(this.props.requestId, this.state)
            .then(() => {
                //this.props.handleAlert(`Event with id:${this.state.event._id} has been updated`)
                this.props.updateProfile().then(() => {
                    this.props.closeModal()
                })
            })
            .catch(err => console.log(err))
    }  // this.setState({ alert: { show: true, text: err.response.data.message } }))


    render() {
        return (

            <>
                <Container>

                    <Row className="justify-content-center">

                        <Col>
                            <Link to="/subjects" className="btn btn-dark">Back</Link>
                            <Card.Body className="singupCard shadow-lg roundBox">
                               
                                <Card.Text>

                                    <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                                    <Form onSubmit={e => this.handleSubmit(e)}>
                                        {/* <Link to="/subjects" className="btn btn-dark">Back</Link> */}
                                        <h2 className="text-center formTitle">Request form</h2>

                                        <Form.Group controlId="date">
                                            <Form.Label>When will the event take place?</Form.Label>
                                            <Form.Control placeholder="When will the event take place?" className="roundBox" type="date" value={this.state.date} onChange={e => this.handleInputChange(e)} name="date" />
                                        </Form.Group>

                                        <Form.Group controlId="description">
                                            <Form.Label>Please, enter a short description:</Form.Label>
                                            <Form.Control as="textarea" placeholder="Please, enter a short description..." className="roundBox" rows={2} value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                                        </Form.Group>

                                        <Form.Group controlId="street">
                                            <Form.Label>Street</Form.Label>
                                            <Form.Control type="text" placeholder="Street" className="roundBox" value={this.state.street} onChange={e => this.handleInputChange(e)} name="street" />
                                        </Form.Group>

                                        <Form.Group controlId="zipCode">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control type="text" placeholder="Zip Code" className="roundBox" value={this.state.zipCode} onChange={e => this.handleInputChange(e)} name="zipCode" />
                                        </Form.Group>

                                        <Form.Group controlId="city">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="City" className="roundBox" value={this.state.city} onChange={e => this.handleInputChange(e)} name="city" />
                                        </Form.Group>

                                        <Form.Group controlId="country">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control type="text" placeholder="Country" className="roundBox" value={this.state.country} onChange={e => this.handleInputChange(e)} name="country" />
                                        </Form.Group>

                                        <Button style={{ width: '100%', marginTop: '20px', marginBottom: '30px' }} className='roundBox mainButton' variant="outline-dark" type="submit">Confirm session </Button>

                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}

export default IndSessionForm



