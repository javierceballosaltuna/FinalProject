import axios from 'axios'

class RequestsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllRequests = () => this.app.get('/admin/requests')
    createRequest = (teacher_id, loggedUser, comment) => this.app.post(`/contact/${teacher_id}/`, loggedUser, comment)

    // getOneRequest = () => this.app.get('/resources/:material_id')


}

export default RequestsService