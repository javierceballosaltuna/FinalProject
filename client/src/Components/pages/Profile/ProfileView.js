import React, { Component } from 'react'
import UsersService from '../../../services/user.service';
import StudentProfile from './StudentProfile';
import TeacherProfile from './TeacherProfile';
import RequestsService from '../../../services/request.service';



class Profile extends Component {

    constructor(props) {

        super(props)
        this.state = {

            user: undefined,
            request: undefined
        }


        this.UsersService = new UsersService()
        this.RequestsService = new RequestsService()

    }

    getOneUser = () => {

        this.UsersService
            .getOneUser()
            .then(response => this.setState({ user: response.data[0], request: response.data[1] }))
            .catch(err => console.log(err))

    }


    handleApprove = (request_id) => {
        this.RequestsService
            .approveRequest(request_id)
            .then((response) => console.log(response.data))
            // this.setState({ request: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount() {
        this.getOneUser()
    }

    render() {


        return (

            this.state.user ? (this.state.user.role === 'teacher'
                ?
                <>
                    <h1>buenassss</h1>
                    <TeacherProfile handleApprove={() => this.handleApprove()} user={this.state.user} request={this.state.request} />
                    {/* <h1>{this.showProfileByRole}</h1> */}

                </>
                :
                <>
                    <h1>buenassss</h1>
                    <StudentProfile handleApprove={() => this.handleApprove()} user={this.state.user} request={this.state.request} />
                </>)
                : null
        )





    }
}



export default Profile