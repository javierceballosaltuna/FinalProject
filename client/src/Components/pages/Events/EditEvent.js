import { Component } from 'react'
import { Row, Modal, Col, Form, Button } from 'react-bootstrap'
import EventsService from '../../../services/event.service'

class EditEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            event: {
                date: props.event.date,
                description: props.event.description,
                location: {
                    address: {
                        street: props.event.location.address.street,
                        zipCode: props.event.location.address.zipCode,
                        city: props.event.location.address.city,
                        country: props.event.location.address.country
                    }
                }

            }
        }
        this.eventsService = new EventsService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ event: { ...this.state.event, [name]: value } })
    }


    handleAddressChange(e) {
        const { name, value } = e.target
        this.setState({ event: { 
            ...this.state.event, 
            location: {
                address: {
                    ...this.state.event.location.address,
                    [name]: value 
                }
            }
            }
        }
            )
        
    }

    handleSubmit(e) {
        e.preventDefault()
        this.eventsService
            .editEvent(this.props.event._id, this.state.event)
            .then(() => {
                this.props.closeModal()
                this.props.handleAlert(`Event with id:${this.state.event._id} has been updated`)
            })
            .catch(err => console.log(err))
    }

    render() {

        return (

            <>
                <Modal.Header> <Modal.Title>Edit Your Event</Modal.Title> </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Row as={Row}>
                            <Form.Group as={Col} controlId="date">
                                <Form.Label>When will the event take place?</Form.Label>
                                <Form.Control type="date" value={this.state.event.date} onChange={e => this.handleInputChange(e)} name="date" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row as={Row}>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label>Please, enter a short description:</Form.Label>
                                <Form.Control as="textarea" rows={2} value={this.state.event.description} onChange={e => this.handleInputChange(e)} name="description" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row as={Row}>
                            <Form.Group as={Col} controlId="street">
                                <Form.Label>Street</Form.Label>
                                <Form.Control type="text" value={this.state.event.location.address.street} onChange={e => this.handleAddressChange(e)}  name="street" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row as={Row}>
                            <Form.Group as={Col} controlId="zipCode">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" value={this.state.event.location.address.zipCode} onChange={e => this.handleAddressChange(e)} name="zipCode" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row as={Row}>
                            <Form.Group as={Col} controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={this.state.event.location.address.city} onChange={e => this.handleAddressChange(e)} name="city" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row as={Row}>
                            <Form.Group as={Col} controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" value={this.state.event.location.address.country} onChange={e => this.handleAddressChange(e)} name="country" />
                            </Form.Group>
                        </Form.Row>

                        <Button type="submit" variant="dark">Update event</Button>
                    </Form>
                </Modal.Body>
            </>
        )
    }
}

export default EditEvent