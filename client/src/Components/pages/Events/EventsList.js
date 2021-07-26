import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap'
import EventsService from '../../../services/event.service'
import Spinner from '../../shared/Spinner'
import EventCard from './EventCard'

class EventsList extends Component {

    constructor() {

        super()
        this.state = {
            events: undefined
        }
        this.eventsService = new EventsService()
    }

    getGroupEvents = () => {
        this.eventsService
            .getGroupEvents()
            .then(response => console.log(response))
               // this.setState({ events: response.data }))
            .catch(err => console.log(err))
    }

    getIndividualEvents = () => {
        this.eventsService
            .getIndividualEvents()
            // .then(response => this.setState({ events: response.data }))
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        // meter condicional para renderizar uno u otro
        this.getIndividualEvents()
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
                        <Row>
                            {this.state.events.map(elm => <EventCard key={elm._id} description={elm.description} _id={elm._id} date={elm.date} city={elm.location.address.city} />)}
                        </Row>
                    </Container>

                </>
                )
        )
    }

}

export default EventsList