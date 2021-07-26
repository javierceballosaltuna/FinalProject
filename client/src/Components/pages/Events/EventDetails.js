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
            showModal: false
        }
        this.eventsService = new EventsService()
    }

    componentDidMount() {

        const { event_id } = this.props.match.params

        this.coastersService
            .getEventDetails(event_id)
            .then(response => this.setState({ event: response.data }))
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
                                    <h1>{this.state.event.eventType} Event that takes place on {this.state.event.location.city}</h1>
                                    <p>Description: {this.state.event.description}</p>

                                    <hr />

                                    <p>What is the event about?</p>
                                    <p>{this.state.coaster.description}</p>
                                    <hr />
                                    <p>Where?</p>
                                    <p>Aquí va la API de Google Maps</p>

                                    <hr />

                                    <Link to="/events/:sessions" className="btn btn-dark">Back</Link>

                                </Col>

                                <Col md={4}>
                                    <p>Wanna join?</p>
                                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Join</Button>
                                </Col>
                            </Row>
                    }

                </Container>
                <Link to="/signup">Join</Link>
                <Link to="/signup">Not an account yet? Sign up</Link>
            </>
        )
    }
}


export default EventDetails