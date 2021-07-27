import { Component } from 'react'
import { Link } from 'react-router-dom'
import EventsService from '../../../services/event.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Spinner from '../../shared/Spinner'


class EventDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            event: undefined,
            button: {
                title: 'join',
                classColor: 'btn-dark',
                url: '/events/join/'
            },
            alert: {
                show: false,
                text: ' '
            },
            joinButton: undefined,
            showModal: false
        }
        this.eventsService = new EventsService()
    }

    getEventDetails = () => {

        const { event_id } = this.props.match.params

        this.eventsService
            .getEventDetails(event_id)
            .then(response => this.setState({ event: response.data }))
            .catch(err => console.log(err))

    }

    joinEvent = (e) => {
        e.preventDefault()
        const student = this.props.loggedUser._id
        const { event_id } = this.props.match.params

        this.eventsService
            .joinEvent(event_id, student)
            .then(response => this.setState({ event: response.data, button: { title: 'join', classColor: 'btn-dark', url: '/events/join/' } }))
            .catch(err => console.log(err))

    }

    leaveEvent = (e) => {
        e.preventDefault()
        const student = this.props.loggedUser._id
        const { event_id } = this.props.match.params

        this.eventsService
            .leaveEvent(event_id, student)
            .then(response => this.setState({ event: response.data, button: { title: 'quit', classColor: 'btn-danger', url: '/events/quit/' } }))
            .catch(err => console.log(err))

    }


    componentDidMount() {

        this.getEventDetails()
        this.leaveEvent()
        this.joinEvent()
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
                                    <h1>{this.state.event.eventType} Event that takes place on {this.state.event.location.city}</h1>
                                    <hr />
                                    <p>What is the event about?</p>
                                    <p>{this.state.event.description}</p>
                                    <hr />
                                    <p>Where?</p>
                                    <p>Aquí va la API de Google Maps</p>

                                    <hr />

                                </Col>

                                <Col md={4}>
                                    <p>Wanna join?</p>
                                    <Link to={`${this.state.button.url + this.state.event._id}`} className={`btn ${this.state.button.classColor}`}>
                                        <Button onSubmit={e => this.handleSubmit(e)} style={{ marginTop: '20px', width: '100%' }} type="submit">{this.state.button.title}</Button>
                                    </Link>
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