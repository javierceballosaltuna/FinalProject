import { Component } from 'react'
import { Link } from 'react-router-dom'
import EventsService from '../../../services/event.service'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import Spinner from '../../shared/Spinner'
import EditEvent from './EditEvent'
import { isTeacher } from '../../../Utils'


class EventDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            event: undefined,
            button: {
                joinedTitle: 'Join',
                quittedTitle: 'Quit',
                canceledTitle: 'Cancel',
                classColor: 'undefined'
            },
            alert: {
                show: false,
                text: ' '
            },
            showModal: false
        }
        this.eventsService = new EventsService()
    }

    getEventDetails = () => {

        const { event_id } = this.props.match.params

        return this.eventsService
            .getEventDetails(event_id)
            .then(response => this.setState({ event: response.data }))
            .catch(err => console.log(err))

    }

    componentDidMount = () => {
        this.getEventDetails()
    }

    joinEvent = () => {

        const { event_id } = this.props.match.params

        this.eventsService
            .joinEvent(event_id)
            .then(response => {
                this.getEventDetails()
                this.setState({ button: { joinedTitle: 'Joined', classColor: 'btn-success' } })
            })
            .catch(err => console.log(err))

    }

    leaveEvent = () => {

        const { event_id } = this.props.match.params

        this.eventsService
            .leaveEvent(event_id)
            .then(response => {
                this.getEventDetails()
                this.setState({ quittedTitle: 'Quitted', classColor: 'btn-danger' })
            })
            .catch(err => console.log(err))

    }

    cancelEvent = () => {

        const { event_id } = this.props.match.params

        this.eventsService
            .cancelEvent(event_id)
            .then(response => {
                this.getEventDetails()
                this.setState({ canceledTitle: 'Canceled', classColor: 'mainButton roundBox' })
            })
            .catch(err => console.log(err))

    }

    render() {

        return (
            <>
                <Container style={{ padding:'30px', marginTop: 30, marginBottom: 40 }}>

                    {
                        !this.state.event
                            ?
                            <Spinner />
                            :
                            <Row className="justify-content-around">
                                <Col md={6}>
                                    <h1><b className="capitalize">{this.state.event.eventType}</b> Event that takes place on {this.state.event.location.address.city}</h1>

                                    <Button variant="outline-dark" className="mainButton roundBox" onClick={() => this.setState({ showModal: true })}>Edit Event</Button>
                                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                                        <EditEvent handleAlert={this.props.handleAlert} event={this.state.event} updateDetails={this.getEventDetails} closeModal={() => this.setState({ showModal: false })} />
                                    </Modal>
                                    <hr />
                                    <p>What is the event about?</p>
                                    <p>{this.state.event.description}</p>
                                    <hr />
                                    <p>Where?</p>
                                    <p>
                                        The event takes place at {this.state.event.location.address.street}, in {this.state.event.location.address.city}, {this.state.event.location.address.country}.
                                    </p>
                                    <hr />

                                </Col>

                                <Col md={4}>
                                    <Container>
                                        <Row className='justify-content-center'>


                                        </Row>
                                    </Container>
                                    <Col md={6}>
                                        <p>Wanna join?</p>

                                        <Button variant="outline-dark" className="mainButton roundBox" onClick={this.joinEvent} style={{ marginTop: '20px', width: '50%' }} type="submit">Join</Button>
                                        <Button variant="outline-dark" className="mainButton roundBox" onClick={this.leaveEvent} style={{ marginTop: '20px', width: '50%' }} type="submit">Quit</Button>
                                    </Col>
                                    <Button variant="outline-dark" className="mainButton roundBox" onClick={this.cancelEvent} style={{ marginTop: '20px', width: '100%' }} type="submit">Cancel</Button>
                                </Col>

                            </Row>
                    }

                    <Link to="/events/group-sessions" className="btn btn-dark">Back</Link>
                </Container>
            </>
        )
    }
}


export default EventDetails