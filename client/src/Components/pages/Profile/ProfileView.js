import React, { Component } from 'react'
import { Row, Card, Button, Container, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from '../../shared/Spinner'


class Profile extends Component {

    constructor(props) {

        super(props)
        this.state = {

            user: this.props.loggedUser
        }
        console.log(this.props)
        //this.UsersService = new UsersService()


    }

    // componentDidMount() {

    //     this.getOneUser()

    // }



    // getOneUser(loggedUser) {

    //     this.UsersService
    //         .getOneUser(this.props.loggedUser._id)
    //         .then(response => this.setState({ user: response.data }, console.log(response.data)))
    //         .catch(err => console.log(err))
    // }


    render() {


        return (

            !this.state.user
                ?
                <Spinner />
                :
                (<>
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>

                                    <Card.Img variant="top" src={this.state.user.teacherData.avatar} key={this.state.user._id} />

                                    <Card.Body>
                                        {/* VERIFICAR QUE EL ACCESO AL NAME DEL TEACHER O STUDENT ES ESTE, PORQUE TEACHER SOLO ES ACCESO AL MODELO USER, POR TANTO
                                        ES NECESARIO TB PONER DESPUÉS STUDENTDATA O TEACHERDATA PARA EL NAME, SUBSCHEMA */}
                                        <Card.Title>{this.state.user[0].studentData.name}{this.state.user[0].teacherData.name}'s Profile</Card.Title>
                                        <Card.Text>
                                            <h4>{this.state.user[0].studentData.name}{this.state.user[0].teacherData.name}
                                                {this.state.user[0].studentData.lastName}{this.state.user[0].teacherData.lastName}</h4>

                                            <h4>{this.state.user[0].role}</h4>
                                            <p>{this.state.user[0].studentData.description}{this.state.user[0].teacherData.description}</p>
                                        </Card.Text>
                                        <Button variant="primary"><Link to={`/beers/${this.state.user._id}`} style={{ color: 'white' }}>See more details</Link></Button>
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
                                            <ListGroup.Item>{elm[0].studentData.individualEvent}{elm[0].teacherData.individualEvent}</ListGroup.Item>

                                        </ListGroup>
                                        <h3>Group sessions</h3>
                                        <ListGroup variant="flush">

                                            <ListGroup.Item>{elm[0].studentData.groupEvent}{elm[0].teacherData.groupEvent}</ListGroup.Item>

                                        </ListGroup>
                                    </>
                                )}

                                <hr></hr>
                                {
                                    this.state.request.map(elm => {
                                        {/* if (elm[1].isActive = true) { */}
                                            <>
                                                <h3>Requests</h3>
                                                <ListGroup variant="flush">

                                                    <ListGroup.Item>{elm[1].student}: "{elm[1].comment}"</ListGroup.Item>

                                                </ListGroup>

                                            </>
                                        {/* } */}
                                    }
                                    )
                                }

                            </Col>
                        </Row>
                    </Container>

                    <br></br>
                </>)
        )
    }
}



export default Profile