import { Component } from 'react'
import StudentSignupForm from './StudentSignupForm'
import TeacherSignupForm from './TeacherSignupForm'

class CompleteRegistration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.loggedUser
        }
    }

    render() {

        return (
            this.state.user ? (
                this.props.loggedUser.role === 'teacher'
                    ?
                    <>
                        <TeacherSignupForm history={this.props.history} user={this.state.user} />
                    </>
                    :
                    <>
                        <StudentSignupForm history={this.props.history} user={this.state.user} />
                    </>)
                : null
        )

    }
}

export default CompleteRegistration