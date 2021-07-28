import { Component } from 'react'
import StudentSignupForm from './StudentSignupForm'
import TeacherSignupForm from './TeacherSignupForm'

class CompleteRegistration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.loggedUser
        }
    }

    consolelog = () => {
        console.log(this.state.user)
    }


    render() {

        return (

            <h1>hola</h1>

            // (this.state.user.role === 'student') ? <StudentSignupForm /> : null
            //     (this.state.user.role === 'teacher') ? <TeacherSignupForm /> : null

        )
    }
}

export default CompleteRegistration