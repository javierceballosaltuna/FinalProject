import axios from 'axios'

class EventsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/'
        })
    }

    getAllEvents = () => this.app.get('/admin/events')
    getEventDetails = event_id => this.app.get(`/events/details/${event_id}`)
    createGroupEvent = eventDetails => this.app.post('/events/group-sessions/create', eventDetails)
    getIndividualEvents = () => this.app.get('/events/individual-sessions')
    getGroupEvents = () => this.app.get('/events/group-sessions')
    joinEvent = event_id => this.app.put(`/events/join/${event_id}`)
    leaveEvent = event_id => this.app.put(`/events/quit/${event_id}`)
    editEvent = (event_id, eventDetails) => this.app.put(`/events/edit/${event_id}`, eventDetails)
    cancelEvent = event_id => this.app.put(`/events/cancel/${event_id}`)

}

export default EventsService