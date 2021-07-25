import './ProductDetails.css'
import { Component } from 'react'
import EventsService from '../../../services/event.service'

class EventDetails extends Component {

    constructor() {
        super()
        this.state = {
            event: undefined,
            alert: {
                show: false,
                text: ' '
            },
            showModal: false,
            options: undefined,
            favorite: false,
        }
        this.eventsService = new EventsService()
    }

    render() {

        const event = this.state.event

        return (
            <>
               
            </>
        )
    }
}

export default EventDetails