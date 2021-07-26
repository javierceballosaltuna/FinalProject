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

    componentDidMount() {

        this.getEventDetails()
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
                                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Join</Button>
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