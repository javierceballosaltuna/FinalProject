import React, { Component } from 'react';
import { Row, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TeachingMaterialsService from '../../../services/TeachingMaterial.service'



class AllTeachingMaterials extends Component {

    constructor() {

        super()
        this.state = {

            teachingMaterials: undefined
        }
        this.TeachingMaterialsService = new TeachingMaterialsService
    }

    getAllTeachingMaterials = () => {
        this.TeachingMaterialsService
            .getAllEvents()
            .then(response => this.setState({ teachingMaterials: response.data }))
            .catch(err => console.log(err))
        
    }

    componentDidMount = () => {
        this.getAllTeachingMaterials()
    }

    render() {

        return (

            !this.state.teachingMaterials
                ?
                <h3>CARGANDO LISTA DE EVENTOS</h3>
                :
                (<>
                    <Container>
                        <Row>
                            {this.state.teachingMaterials.map(elm =>

                                <Card style={{ width: '18rem' }}>
                                    
                                    <Card.Body>
                                        <Card.Title>{elm.name}</Card.Title>
                                        <Card.Text>
                                            <h3>{elm.subject}</h3>
                                            <a href={elm.url}>Go to file</a>
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

export default AllTeachingMaterials