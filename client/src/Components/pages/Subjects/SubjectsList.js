import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
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


                <Container>
                    <Row>
                        {this.state.subjects.map(elm => <SubjectCard key={elm._id} name={elm.teacherData.name} _id={elm._id} lastName={elm.teacherData.lastName} subject={elm.teacherData.subject} description={elm.teacherData.description} avatar={ elm.teacherData.avatar}/>)}
                    </Row>
                </Container>




        )
    }

}

export default SubjectsList