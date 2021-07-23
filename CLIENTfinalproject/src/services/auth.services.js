
import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    login = (userName, password) => this.app.post('/login', { userName, password })
    signup = (userName, password, email) => this.app.post('/signup-student', { userName, password, email })
    signup = (userName, password, email) => this.app.post('/signup-teacher', { userName, password, email })
    completeRegistration =(userDetails)=> this.app.put('/complete-registration', userDetails )
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
}

export default AuthService