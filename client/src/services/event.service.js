import axios from 'axios'

class EventsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/'
        })
    }

    getAllEvents = () => this.app.get('/admin/events')
    getEventDetails = () => this.app.get('/events/:event_id')
    createGroupEvent = () => this.app.post('/events/group-sessions/create/')
    getIndividualEvents = () => this.app.get('/events/individual-sessions')
    getGroupEvents = () => this.app.get('/events/group-sessions')
    joinEvent = () => this.app.put('/events/:event_id/join/')
    leaveEvent = () => this.app.put('/events/:event_id/quit/')
    editEvent = () => this.app.put('/events/edit/:event_id')
    cancelEvent = () => this.app.put('/events/cancel/:event_id')


}

export default EventsService