import React, { Component } from 'react';
import { Row, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UsersService from '../../../services/user.service';
import RequestsService from '../../../services//Request.service';


class Profile extends Component {

    constructor() {
        super()
        this.state()

        user: undefined
        request: undefined

        this.UsersService = new UsersService()
        this.RequestsService = new RequestsService()
    }



    componentDidMount() {
        //ESTO NO LO TENEMOS COMO PARAM
        const { user_id } = this.props.match.params

        this.UsersService
            .getOneUser(user_id)
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))

        // this.RequestsService
        //     .getOneUser(user_id)
        //     .then(response => this.setState({ user: response.data }))
        //     .catch(err => console.log(err))


    }



    render() {

        return (

            !this.state.user
                ?
                <h3>LOADING PROFILE...</h3>
                :
                (<>
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={this.state.teacherData.avatar} key={elm._id} />

                                    <Card.Body>
                                        {/* VERIFICAR QUE EL ACCESO AL NAME DEL TEACHER O STUDENT ES ESTE, PORQUE TEACHER SOLO ES ACCESO AL MODELO USER, POR TANTO
                                        ES NECESARIO TB PONER DESPUÉS STUDENTDATA O TEACHERDATA PARA EL NAME, SUBSCHEMA */}
                                        <Card.Title>{this.state.user.studentData.name}{this.state.user.teacherData.name}'s Profile</Card.Title>
                                        <Card.Text>
                                            <h4>{this.state.user.studentData.name}{this.state.user.teacherData.name}
                                                {this.state.user.studentData.lastName}{this.state.user.teacherData.lastName}</h4>

                                            <h4>{this.state.user.role}</h4>
                                            <p>{this.state.user.studentData.description}{this.state.user.teacherData.description}</p>
                                        </Card.Text>
                                        <Button variant="primary"><Link to={`/beers/${elm._id}`} style={{ color: 'white' }}>See more details</Link></Button>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col>
                                {/* SECCIÓN DE EVENTOS  */}
                                {this.state.user.map(elm =>
                                    <>
                                        <h3>1 to 1 sessions</h3>
                                        <ListGroup variant="flush">
                                            {/* PONER SLO LOS ACTIVOS, CONDICIONAL AQUI */}
                                            <ListGroup.Item>{elm.studentData.individualEvent}{elm.teacherData.individualEvent}</ListGroup.Item>

                                        </ListGroup>
                                        <h3>Group sessions</h3>
                                        <ListGroup variant="flush">

                                            <ListGroup.Item>{elm.studentData.groupEvent}{elm.teacherData.groupEvent}</ListGroup.Item>

                                        </ListGroup>
                                    </>
                                )}

                                <hr></hr>
                                {
                                    this.state.request.map(elm =>
                                        <>
                                            <h3>Requests</h3>
                                            <ListGroup variant="flush">

                                                <ListGroup.Item>{elm.student}: "{elm.comment}"</ListGroup.Item>

                                            </ListGroup>

                                        </>
                                    )}



                            </Col>
                        </Row>
                    </Container>

                    <br></br>
                </>)
        )
    }
}



export default Profile