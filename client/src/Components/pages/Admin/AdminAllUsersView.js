import React, { Component } from 'react';
import { Row, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UsersService from '../../../services/user.services';



class AllStudents extends Component {

    constructor() {

        super()
        this.state = {

            users: undefined
        }
        this.UsersService = new UsersService
    }

    getAllUsers = () => {
        this.UsersService
            .getAllUsers()
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
        console.log(r)
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    render() {

        return (

            !this.state.users
                ?
                <h3>CARGANDO LISTA DE USUARIOS</h3>
                :
                (<>
                    <Container>
                        <Row>
                            {this.state.users.map(elm =>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elm.avatar} key={elm._id} />
                                    <Card.Body>
                                        <Card.Title>{elm.name}</Card.Title>
                                        <Card.Text>
                                            {elm.description}
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

export default AllStudents