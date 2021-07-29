import { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import UploadsService from '../../../services/uploads.service'
import Spinner from '../../shared/Spinner'

class TeacherSignupForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            lastName: '',
            age: '',
            description: '',
            avatar: '',
            subject: '',
            alert: {
                show: false,
                text: ' '
            },
            loading: false
        }
        this.AuthService = new AuthService()
        this.uploadsService = new UploadsService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.AuthService
            .completeRegistration(this.state)
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
                        <Form.Label>How would you describe yourself?</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                    </Form.Group>

                    <Form.Group controlId="avatar">
                        <Form.Label>Please, upload your avatar</Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>

                    <Form.Group controlId="subject">
                        <Form.Label>What kind of subjects do you want to teach?</Form.Label>
                        <Form.Control as="select" value={this.state.subject} name="subject" onChange={e => this.handleInputChange(e)}>
                            <option value="spanish"> Spanish </option>
                            <option value="math"> Math </option>
                            <option value="science"> Science </option>
                            <option value="history"> History </option>
                            <option value="music"> Music </option>
                            <option value="volvo"> English </option>
                            <option value="volvo"> Art </option>
                            <option value="volvo"> English </option>
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

export default TeacherSignupForm


