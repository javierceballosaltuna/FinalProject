import React, { Component } from 'react'
import { Row, Card, Button, Container, Col, Table, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import Spinner from '../../shared/Spinner'


class StudentProfile extends Component {

    constructor({ props }) {

        super(props)
        this.state = {
            modal: false,
            requestId: undefined,
        }
    }
    render() {
        return (

            <Container style={{
                paddingTop: '40px',
            }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body key={this.props.user._id}>

                                <Card.Title>{this.props.user.studentData.name}{this.props.user.studentData.lastName}'s Profile</Card.Title>
                                <Card.Text>
                                    <h4>{this.props.user.role}</h4>
                                    <p>{this.props.user.studentData.description}</p>
                                </Card.Text>
                                <Button variant="primary"><Link to={`/beers/${this.props._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <h3>Future sessions:</h3>
                        {this.props.user.studentData.individualEvent.map(elm =>

                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{elm.description}</td>
                                        <td>{elm.date}</td>
                                    </tr>
                                </tbody>
                            </Table>

                        )}

                        <hr></hr>
                        <h3>Group sessions:</h3>
                        {this.props.user.studentData.groupEvent.map(elm =>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{elm.description}</td>
                                            <td>{elm.date}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                        )}
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default StudentProfile