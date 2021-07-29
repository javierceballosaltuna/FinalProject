import { Component } from 'react'
import { Row, Modal, Col, Form, Button, Spinner, Alert } from 'react-bootstrap'
import UsersService from '../../../services/user.service'


class EditStudentProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: props.profile.studentData.name,
            lastName: props.profile.studentData.lastName,
            age: props.profile.studentData.age,
            description: props.profile.studentData.description,
            course: props.profile.studentData.course,
            tutorName: props.profile.studentData.legalTutor.tutorName,
            tutorLastName: props.profile.studentData.legalTutor.tutorLastName,
            personalId: props.profile.studentData.legalTutor.personalId,
            alert: {
                show: false,
                text: ' '
            }

        }
        this.UsersService = new UsersService()
       
        
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.UsersService
            .editProfile(this.state)
            .then(response => {
                this.props.history.push('/profile')
                this.setState({
                    name: '',
                    lastName: '',
                    age: '',
                    description: '',
                    avatar: '',
                    subject: ''
                })
            })
            // .catch(err => this.setState({ alert: { show: true, text: err.response.data.message } }))
            .catch(err => console.log('este es el error', err))
    }

    handleFileUpload = e => {

        this.setState({ loading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    loading: false,
                    avatar: response.data.cloudinary_url
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Alert show={this.state.alert.show} variant='danger'>{this.state.alert.text}</Alert>

                <Form onSubmit={e => this.handleSubmit(e)}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.lastName} onChange={e => this.handleInputChange(e)} name="lastName" />
                    </Form.Group>

                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" value={this.state.age} onChange={e => this.handleInputChange(e)} name="age" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>About you</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                    </Form.Group>

                    <Form.Group controlId="avatar">
                        <Form.Label>Change your avatar</Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>

                    <Form.Group controlId="subject">
                        <Form.Label>Any subject to add?</Form.Label>
                        <Form.Control as="select" value={this.state.subject} name="subject" onChange={e => this.handleInputChange(e)}>
                            <option value="spanish"> Spanish </option>
                            <option value="math"> Math </option>
                            <option value="science"> Science </option>
                            <option value="history"> History </option>
                            <option value="music"> Music </option>
                            <option value="english"> English </option>
                            <option value="art"> Art </option>
                            <option value="physical education"> Physical Education </option>
                            <option value="special needs"> Special Needs </option>
                        </Form.Control>
                    </Form.Group>

                    {this.state.loading && <Spinner />}

                    <Button variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.loading ? 'Uploading avatar...' : 'Complete your registration'}
                    </Button>

                </Form>
            </>
        )
    }
}


export default EditStudentProfile