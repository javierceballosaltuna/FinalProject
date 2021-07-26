import { Container, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

const SpinnerAnimation = () => {
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Spinner animation="grow" role="status" style={{ width: "3rem", height: "3rem" }}>
                </Spinner>
            </Row>
        </Container >
    )
}

export default SpinnerAnimation