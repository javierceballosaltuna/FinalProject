import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import RequestService from '../../../services/request.service'



class RequestAClassForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student: '',
            teacher: '',
            comment: '',

        }
        console.log(this.props.teacherId)
        this.RequestService = new RequestService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.RequestService
            .createRequest(this.props.teacherId, { comment: this.state.comment })
            .then(() => {
                this.props.closeModal()
                this.props.refreshSubjects()
                this.setState({ student: '', teacher: '', coment: '' })
            })
            .catch((err) => console.log('no se ha creado la request'))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="teacher">
                        <Form.Label>Teacher</Form.Label>
                        <Form.Control type="text" value={this.props.teacher} onChange={this.handleInputChange} name="teacher" disabled />
                    </Form.Group>

                    <Form.Group controlId="student">
                        <Form.Label>Student</Form.Label>
                        <Form.Control type="text" value={this.props.student.studentData.name}onChange={this.handleInputChange} name="student" disabled />
                    </Form.Group>

                    <Form.Group controlId="comment">
                        <Form.Label>Message</Form.Label><br></br>
                        <textarea style={{ width: '100%' }} type="text" onChange={this.handleInputChange} name="comment" />

                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Send</Button>

                </Form>

            </Container>
        )
    }
}

export default RequestAClassForm