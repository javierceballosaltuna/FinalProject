import React, { Component } from 'react'
import { Container, Row, Button, Modal, Col } from 'react-bootstrap'
import SubjectsService from '../../../services/subject.service'
import SubjectCard from './SubjectCard'



// import { Link } from 'react-router-dom'
// import EventsService from '../../../services/event.service'
// import Spinner from '../../shared/Spinner'
// import EventCard from './EventCard'

class SubjectsList extends Component {

    constructor() {

        super()
        this.state = {
            subjects: undefined,
            modal: false,
            //MODAL

        }
        this.SubjectsService = new SubjectsService()
    }

    getAllSubjects = () => {

        this.SubjectsService
            .getAllSubjects()
            .then(response => this.setState({ subjects: response.data }, console.log(response.data)))
            // .then(response =>  console.log(response.data))
            .catch(err => console.log(err))

    }

    componentDidMount = () => {

        this.getAllSubjects()
    }

    render() {

        return (

            !this.state.subjects
                ?
                <h3>LOADING...</h3>
                :

                (<>
                    <Container>
                        <Row>
                            {this.state.subjects.map(elm =>
                                <>
                                    <Col>
                                        <SubjectCard
                                            key={elm._id}
                                            name={elm.teacherData.name}
                                            _id={elm._id} lastName={elm.teacherData.lastName}
                                            subject={elm.teacherData.subject}
                                            description={elm.teacherData.description}
                                            avatar={elm.teacherData.avatar} />

                                        <Button onClick={() => this.setState({ modal: true })} variant="primary" style={{ marginBottom: '20px' }}>Request</Button>
                                    </Col>
                                </>

                            )}



                            {/* AQUÍ IRÁ EL MODAL CON LA SOLICITUD, COMENTARIO */}

                          
                        </Row>


                    </Container>


                      <Modal Modal show = { this.state.modal } onHide = {() => this.setState({modal: false })}>
                        <Modal.Header>
                            <Modal.Title>Make a request</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                        </Modal.Body>
                        </Modal>

                </>)


        )
    }

}

export default SubjectsList

//MODAL 
    // (<>
    //     

    //     <Row>
    //         {this.state.coasters.map(elm => <CoasterCard {...elm} />)}
    //     </Row>

    //     <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
    //         <Modal.Header>
    //             <Modal.Title>Nueva Montaña rusa</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //             <CoasterForm refreshCoasters={this.loadCoasters} closeModal={() => this.setState({ modal: false })} />
    //         </Modal.Body>
    //     </Modal>
    // </>
    // )