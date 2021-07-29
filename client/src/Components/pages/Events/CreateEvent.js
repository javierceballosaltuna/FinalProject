import './CreateEvent.css'
import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
import EventsService from '../../../services/event.service'
import { Link } from 'react-router-dom'

class CreateEventForm extends Component {

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
        this.eventsService = new EventsService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.eventsService
            .createGroupEvent(this.state)
            .then(response => {
                this.props.history.push('/profile')
                console.log(response.data)
            })
            .catch(err => this.setState({ alert: { show: true, text: err.response.data.message } }))
    }

    render() {

        return (

            <>
                <Container>

                    <Row className="justify-content-center">

                        <Col md={6}>

                            <Card.Body className="singupCard shadow-lg roundBox">
                                    <Link to="/events/group-sessions" className="btn btn-dark">Back</Link>
                                <Card.Text>

                                    <h2 className="text-center formTitle">Create a new Event</h2>

                                    <Form onSubmit={e => this.handleSubmit(e)}>

                                        <Form.Group controlId="date">
                                            <Form.Control placeholder="When will the event take place?" className="roundBox" type="date" value={this.state.date} onChange={e => this.handleInputChange(e)} name="date" />
                                        </Form.Group>

                                        <Form.Group controlId="description">
                                            <Form.Control as="textarea" placeholder="Please, enter a short description..." className="roundBox" rows={2} value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                                        </Form.Group>

                                        <Form.Group controlId="street">
                                            <Form.Control placeholder="Street" className="roundBox" type="text" value={this.state.street} onChange={e => this.handleInputChange(e)} name="street" />
                                        </Form.Group>

                                        <Form.Group controlId="zipCode">
                                            <Form.Control placeholder="Zip Code" className="roundBox" type="text" value={this.state.zipCode} onChange={e => this.handleInputChange(e)} name="zipCode" />
                                        </Form.Group>

                                        <Form.Group controlId="city">
                                            <Form.Control placeholder="City" className="roundBox" type="text" value={this.state.city} onChange={e => this.handleInputChange(e)} name="city" />
                                        </Form.Group>

                                        <Form.Group controlId="country">
                                            <Form.Control placeholder="Country" className="roundBox" type="text" value={this.state.country} onChange={e => this.handleInputChange(e)} name="country" />
                                        </Form.Group>

                                        <Button variant="outline-dark" className="mainButton roundBox" style={{ width: '100%', marginTop: '20px' }} type="submit">Create event</Button>

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

export default CreateEventForm