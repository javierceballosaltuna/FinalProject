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


    render() {

        return (

            this.state.user ? (this.state.user.role === 'teacher'
                ?
                <>
                    <TeacherSignupForm handleApprove={() => this.handleApprove()} user={this.state.user} request={this.state.request} />

                </>
                :
                <>
                    <StudentSignupForm handleApprove={() => this.handleApprove()} user={this.state.user} request={this.state.request} />
                </>)
                : null
        )
    }
}

export default CompleteRegistration