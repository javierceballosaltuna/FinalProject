import { Component } from 'react'
import { Link } from 'react-router-dom'
import EventsService from '../../../services/event.service'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import Spinner from '../../shared/Spinner'
import EditEvent from './EditEvent'
import { isTeacher } from '../../../Utils'
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './EventsMap'

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
                this.setState({ canceledTitle: 'Canceled', classColor: 'btn-danger' })
            })
            .catch(err => console.log(err))

    }

    render() {

        return (
            <>
                <Container>

                    {
                        !this.state.event
                            ?
                            <Spinner />
                            :
                            <Row className="justify-content-around">
                                <Col md={6}>
                                    <h1>{this.state.event.eventType} Event that takes place on {this.state.event.location.address.city}</h1>

                                    <Button variant="outline-info" onClick={() => this.setState({ showModal: true })}>Edit Event</Button>
                                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} >
                                        <EditEvent handleAlert={this.props.handleAlert} event={this.state.event} updateDetails={this.getEventDetails} closeModal={() => this.setState({ showModal: false })} />
                                    </Modal>
                                    <hr/>
                                    <p>What is the event about?</p>
                                    <p>{this.state.event.description}</p>
                                    <hr/>
                                    <p>Where?</p>
                                    {/* <section style={{width: '250px', height: '250px'}}>
                                        <MapContainer
                                            address={this.state.event.location.address.address}
                                            city={this.state.event.location.address.city}
                                            country={this.state.event.location.address.country}
                                            zipCode={this.state.event.location.address.city}
                                        />
                                    </section> */}

                                    <hr />

                                </Col>

                                <Col md={4}>
                                    <p>Wanna join?</p>
                                    <Button className={this.state.button.classColor} onClick={this.joinEvent} style={{ marginTop: '20px' }} variant="outline-dark" type="submit">{this.state.button.joinedTitle}</Button>
                                    <Button className={this.state.button.classColor} onClick={this.leaveEvent} style={{ marginTop: '20px' }} variant="outline-dark" type="submit">{this.state.button.quittedTitle}</Button>
                                </Col>
                                <Col md={6}>
                                    <Button className={this.state.button.classColor} onClick={this.cancelEvent} style={{ marginTop: '20px' }} variant="outline-dark" type="submit">{this.state.button.canceledTitle}</Button>
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