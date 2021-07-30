import React, { Component } from 'react'
import { Row, Container, Alert, Button } from 'react-bootstrap'
import EventsService from '../../../services/event.service'
import { Link } from 'react-router-dom'
import Spinner from '../../shared/Spinner'
import EventCard from './EventCard'

class EventsList extends Component {

    constructor(props) {

        super(props)
        this.state = {
            events: undefined,
            alert: {
                show: false,
                text: ' '
            }
        }
        this.eventsService = new EventsService()
    }

    getIndividualEvents = () => {

        this.eventsService
            .getIndividualEvents()
            .then(response => this.setState({ events: response.data }))
            .catch(err => this.setState({ alert: { show: true, text: err.response.data.message } }))

    }


    getGroupEvents = () => {

        this.eventsService
            .getGroupEvents()
            .then(response => this.setState({ events: response.data }))
            .catch(err => this.setState({ alert: { show: true, text: err.response.data.message } }))

    }

    componentDidMount = () => {

        const { sessions } = this.props.match.params

        if (sessions === 'individual-sessions') { this.getIndividualEvents() } else if (sessions === 'group-sessions') { this.getGroupEvents() }

    }

    render() {

        return (

            !this.state.events
                ?
                <Spinner />
                :
                (
                    <>
                        <Container>
                        <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>
                            <Row>
                        <Link to={'/events/group-events/create'}>
                            <Button style={{ width: '100%', marginTop: '50px' }} variant="outline-dark" className="mainButton roundBox" block >Create Event</Button>
                        </Link>
                                {this.state.events.map(elm => <EventCard key={elm._id} description={elm.description} _id={elm._id} date={elm.date} city={elm.location.address.city} />)}
                            </Row>
                        </Container>

                    </>
                )
        )
    }

}

export default EventsList