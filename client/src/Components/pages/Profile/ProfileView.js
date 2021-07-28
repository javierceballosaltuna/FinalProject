import React, { Component } from 'react'
import UsersService from '../../../services/user.service';
import StudentProfile from './StudentProfile';
import TeacherProfile from './TeacherProfile';



class Profile extends Component {

    constructor(props) {

        super(props)
        this.state = {

            user: undefined,
            request: undefined
        }


        this.UsersService = new UsersService()

    }

    getOneUser = () => {

        this.UsersService
            .getOneUser()
            .then(response => this.setState({ user: response.data[0], request: response.data[1] }, console.log(response.data)))
            .catch(err => console.log(err))

    }



    // showProfileByRole = () => {

    //     console.log(this.state.user)

    //     if (this.state.user.role === 'teacher') {
    //         <TeacherProfile user={this.state.user} request={this.state.request} />
    //     }
    //     if (this.state.user.role === 'student') {
    //         <StudentProfile user={this.state.user} request={this.state.request} />

    //     }
    // }

    componentDidMount() {
        this.getOneUser()
    }

    render() {


        return (


            this.state.user?.role === 'teacher'
                ?


                <>
                    <h1>buenassss</h1>
                    <TeacherProfile user={this.state.user} request={this.state.request}/>
                    {/* <h1>{this.showProfileByRole}</h1> */}

                </>
                :
                null
            
            
            
        )
    }
}



export default Profile