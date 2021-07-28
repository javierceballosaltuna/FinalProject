import axios from 'axios'

class RequestsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllRequests = () => this.app.get('/admin/requests')
    createRequest = (teacher_id, comment) => this.app.post(`/contact/${teacher_id}`, comment)
    approveRequest = (request_id) => this.app.put(`/contact/${request_id}/approve`)

    // getOneRequest = () => this.app.get('/resources/:material_id')


}

export default RequestsService