import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    login = userDetails => this.app.post('/', userDetails)
    studentSignup = userDetails => this.app.post('/signup-student', userDetails)
    teacherSignup = userDetails => this.app.post('/signup-teacher', userDetails)
    completeRegistration = userDetails => this.app.put('/complete-registration', userDetails )
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isloggedin')
}

export default AuthService