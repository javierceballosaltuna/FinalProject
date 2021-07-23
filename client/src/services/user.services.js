import axios from 'axios'

class UsersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllUsers = () => this.app.get('/admin/users')
    getMyUser = () => this.app.get('/profile/') 
    

}

export default UsersService