import axios from 'axios'

class UsersService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getAllUsers = () => this.app.get('/admin/users')
    getOneUser = () => this.app.get('/profile')
    editProfile = (profileData) => this.app.put('/profile/edit', profileData)
    //habra que ver si tenemos que meterlo como param al final...
    

}

export default UsersService