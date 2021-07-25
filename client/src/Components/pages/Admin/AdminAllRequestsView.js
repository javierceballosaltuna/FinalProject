import React, { Component } from 'react';
import { Row, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RequestsService from '../../../services/Request.service'



class AllRequests extends Component {

    constructor() {

        super()
        this.state = {

            requests: undefined
        }
        this.RequestsService = new RequestsService
    }

    getAllRequests = () => {
        this.RequestsService
            .getAllRequests()
            .then(response => this.setState({ requests: response.data }))
            .catch(err => console.log(err))

    }

    componentDidMount = () => {
        this.getAllRequests()
    }

    render() {

        return (

            !this.state.requests
                ?
                <h3>REQUEST LIST LOADING...</h3>
                :
                (<>
                    <Container>
                        <Row>
                            {this.state.requests.map(elm =>

                                <Card style={{ width: '18rem' }}>

                                    <Card.Body>
                                        {/* VERIFICAR QUE EL ACCESO AL NAME DEL TEACHER O STUDENT ES ESTE, PORQUE TEACHER SOLO ES ACCESO AL MODELO USER, POR TANTO
                                        ES NECESARIO TB PONER DESPUÉS STUDENTDATA O TEACHERDATA PARA EL NAME, SUBSCHEMA */}
                                        <Card.Title>Class Event between: Teacher: {elm.teacher.teacherData.name} and Student: { elm.student.studentData.name}</Card.Title>
                                        <Card.Text>
                                            <h4>{elm.isAccepted}</h4>
                                            <h4>{elm.isActive}</h4>
                                            <p>{elm.comment}</p>
                                        </Card.Text>
                                        <Button variant="primary"><Link to={`/beers/${elm._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                                    </Card.Body>
                                </Card>

                            )}

                        </Row>
                    </Container>

                    <br></br>
                </>)
        )
    }

}

export default AllRequests