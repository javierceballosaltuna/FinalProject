import React, { Component } from 'react';
import { Row, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventsService from '../../../services/event.services';



class AllEvents extends Component {

    constructor() {

        super()
        this.state = {

            events: undefined
        }
        this.EventsService = new EventsService
    }

    getAllEvents = () => {
        this.EventsService
            .getAllEvents()
            .then(response => this.setState({ events: response.data }))
            .catch(err => console.log(err))
        
    }

    componentDidMount = () => {
        this.getAllEvents()
    }

    render() {

        return (

            !this.state.events
                ?
                <h3>CARGANDO LISTA DE EVENTOS</h3>
                :
                (<>
                    <Container>
                        <Row>
                            {this.state.events.map(elm =>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={elm.avatar} key={elm._id} />
                                    <Card.Body>
                                        <Card.Title>{elm.date}</Card.Title>
                                        <Card.Text>
                                            <h3>{elm.date}</h3>
                                            <h4>{elm.type}</h4>
                                            <p>{elm.description}</p>
                                            {/* //TEACHING MATERIAL?? */}
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

export default AllEvents