import axios from 'axios'

class EventsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllEvents = () => this.app.get('/admin/events')
    getEventDetails = () => this.app.get('/events/:event_id')
    createGroupEvent = () => this.app.get('/events/group-sessions/create/')
    getIndividualEvents = () => this.app.get('/events/individual-sessions')
    getGroupEvents = () => this.app.get('/events/group-sessions')
    joinEvent = () => this.app.get('/events/:event_id/join/')
    leaveEvent = () => this.app.get('/events/:event_id/quit/')
    editEvent = () => this.app.get('/events/edit/:event_id')
    cancelEvent = () => this.app.get('/events/cancel/:event_id')


}

export default EventsService