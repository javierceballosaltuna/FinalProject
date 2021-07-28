import { Component } from 'react'
import StudentSignupForm from './StudentSignupForm'
import TeacherSignupForm from './TeacherSignupForm'

class CredentialsCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser
        }
    }

    render() {

        return (

            (this.state.user.role === 'student') ? <StudentSignupForm /> : null
            (this.state.user.role === 'teacher') ? <TeacherSignupForm /> : null
            


        )
    }
}

export default CredentialsCard