import axios from 'axios'

class EventsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllEvents = () => this.app.get('/admin/events')
    getOneEvent = () => this.app.get('/events/:event_id')


}

export default EventsService