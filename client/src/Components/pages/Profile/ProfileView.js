import React, { Component } from 'react'
import StudentProfile from './StudentProfile';
import TeacherProfile from './TeacherProfile';



class Profile extends Component {

    constructor(props) {

        super(props)
        this.state = {

            user: this.props.loggedUser
        }
        console.log(this.state.user)

    }


    showProfileByRole = () => {

        console.log(this.state.user.role)

        if (this.state.user.role === 'teacher') {

            return <TeacherProfile user={this.props.loggedUser} />
        }
        if (this.state.user.role === 'student') {
            return <StudentProfile user={this.props.loggedUser} />

        }
    }



    render() {


        return (
            <>
                <h1>buenassss</h1>
                <h1>{this.showProfileByRole()}</h1>
            </>
        )
    }
}



export default Profile