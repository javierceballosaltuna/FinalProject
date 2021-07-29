// import React, { Component } from 'react'
// import { Row, Card, Button, Container, Col, ListGroup, ListGroupItem, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import IndSessionForm from './IndSessionForm'




// class TeacherProfile extends Component() {

//     constructor(props) {

//         super(props)
//         this.state = {
//             modal: false
//         }
        
//     }
    

//     render() {
//         return (

//             <Container>
//                 <Row>
//                     <Col>
//                         <Card style={{ width: '18rem' }}>
//                             <h1>hola</h1>

//                             <Card.Img variant="top" src={this.user.teacherData.avatar} key={this.user._id} />


//                             <Card.Body>

//                                 <Card.Title>{this.user.teacherData.name}{this.user.teacherData.lastName}'s Profile</Card.Title>


//                                 <Card.Text>


//                                     <h4>{this.user.role}</h4>
//                                     <p>{this.user.teacherData.description}</p>
//                                 </Card.Text>
//                                 <Button variant="primary"><Link to={`/beers/${this._id}`} style={{ color: 'white' }}>See more details</Link></Button>
//                             </Card.Body>

//                         </Card>
//                     </Col>


//                     <Col>
//                         <h3>1 to 1 sessions:</h3>
//                         {this.user.teacherData.individualEvent.map(elm =>
//                             <>


//                                 <ListGroup variant="flush" key={elm._id}>

//                                     <ListGroup.Item key={elm._id}>{elm.date}</ListGroup.Item>
//                                     <ListGroup.Item >{elm.description}</ListGroup.Item>

//                                 </ListGroup>


//                             </>
//                         )}

//                         <hr></hr>
//                         <h3>Group sessions:</h3>
//                         {this.user.teacherData.groupEvent.map(elm =>
//                             <>


//                                 <ListGroup variant="flush" key={elm._id}>

//                                     <ListGroup.Item key={elm._id}>{elm.date}</ListGroup.Item>
//                                     <ListGroup.Item >{elm.description}</ListGroup.Item>

//                                 </ListGroup>


//                             </>
//                         )}

//                         <hr></hr>
//                         <h3>Individual Session Requests:</h3>


//                         {
//                             this.request.map(elm =>
//                                 // { console.log(elm.teacher.teacherData.name, elm.student.studentData.name) }
//                                 // if ((elm.isAccepted = false) && (elm.isActive = true)) {
//                                 <>
//                                     <ListGroup variant="flush" key={elm._id}>

//                                         <ListGroup.Item key={elm._id}>Requested by:{elm.student.studentData.name}</ListGroup.Item>
//                                         <ListGroup.Item key={elm._id}> Comment:{elm.comment}</ListGroup.Item>
//                                         <ListGroupItem>
//                                             <Button onClick={() => this.handleApprove(elm._id), this.setState({ modal: true })} variant="primary" style={{ marginBottom: '20px' }}>Propose a session</Button>
                                        
//                                             <button onClick={this.handleApprove}>Decline</button>
//                                         </ListGroupItem>

//                                     </ListGroup>

//                                     <Modal Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
//                                         <Modal.Header>
//                                             <Modal.Title>Make a request</Modal.Title>
//                                         </Modal.Header>
//                                         <Modal.Body>
//                                             <IndSessionForm props={this.props.name} teacherId={this.props._id} student={this.props.student} refreshSubjects={this.getAllSubjects} closeModal={() => this.setState({ modal: false })} />
//                                         </Modal.Body>
//                                     </Modal>
//                                 </>
//                                 // }
//                             )

//                         }


//                     </Col>
//                 </Row>
//             </Container >
//         )
//     }
// }

// export default TeacherProfile