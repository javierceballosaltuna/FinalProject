import axios from 'axios'

class SubjectsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllSubjects = () => this.app.get('/subjects')
  


}

export default SubjectsService