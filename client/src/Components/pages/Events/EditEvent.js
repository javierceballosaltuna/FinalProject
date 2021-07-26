import { Component } from 'react'
import { Row, Modal, Col, Form, Button } from 'react-bootstrap'
import EventsService from '../../../services/event.service'
import Spinner from '../../shared/Spinner'

class EditEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            event: {
                date: this.state.date,
                description: this.state.description,
                street: this.state.street,
                zipCode: this.state.zipCode,
                city: this.state.city,   
                country: this.state.country,
            }
        }
        this.eventsService = new EventsService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ event: { ...this.state.event, [name]: value } })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.eventsService
            .editEvent(this.props.event._id, this.state.event)
            .then(response => {
                this.props.closeModal()
                this.props.fetchProduct()
                this.props.handleAlert(`${this.state.event._id} has been updated`)
            })
            .catch(err => console.log(err))
    }

    render() {

        return (

            !this.state.categoryOptions
                ?
                <Spinner />
                :
                <>
                    <Modal.Header> <Modal.Title>Edit Your Event</Modal.Title> </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Row as={Row}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={this.state.product.name} onChange={e => this.handleInputChange(e)} name="name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row as={Row}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="textarea" value={this.state.product.description} onChange={e => this.handleInputChange(e)} name="description" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="category">
                                <Form.Label>Select Category</Form.Label>
                                <Form.Control as="select" value={this.state.product.category} name="category" onChange={e => this.handleInputChange(e)}>
                                    <option>{this.state.product.category.name}</option>
                                    {this.state.categoryOptions.map(elm => <option key={elm._id} value={elm._id} > {elm.name}</option>)}
                                </Form.Control>
                            </Form.Group>
                            <Button type="submit" variant="dark">Save changes</Button>
                        </Form>
                    </Modal.Body>
                </>
        )
    }
}

export default EditEvent