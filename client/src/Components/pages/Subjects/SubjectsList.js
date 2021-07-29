import React, { Component } from 'react'
import { Container, Row, Button, Modal, Col, Spinner } from 'react-bootstrap'
import SubjectsService from '../../../services/subject.service'
import SubjectCard from './SubjectCard'

class SubjectsList extends Component {

    constructor(props) {

        super(props)
        this.state = {

            user: undefined,
            subjects: undefined,
            modal: false,

            //MODAL

        }
        this.SubjectsService = new SubjectsService()
        console.log(this.props)

    }

    getAllSubjects = () => {

        this.SubjectsService
            .getAllSubjects()
            .then(response => this.setState({ subjects: response.data, user: this.props.loggedUser }))
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
                <Spinner />
                :

                (<>
                    <Container>
                        <Row>
                            {this.state.subjects.map((elm) =>

                                <Col style={{objectFit: 'cover'}}>
                                    <SubjectCard

                                        key={elm._id}
                                        name={elm.teacherData.name}
                                        _id={elm._id} lastName={elm.teacherData.lastName}
                                        subject={elm.teacherData.subject}
                                        description={elm.teacherData.description}
                                        avatar={elm.teacherData.avatar}
                                        student={this.props.loggedUser} />
                                </Col>


                            )}
                        </Row>
                    </Container>
                </>)
        )
    }

}

export default SubjectsList
