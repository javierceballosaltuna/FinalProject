import { Toast } from "react-bootstrap"
import logo from './logo_transparent.png'

const Alert = ({ handleAlert, show, text }) => {

    return (
        <Toast autohide delay={3000} show={show} onClose={() => handleAlert('', false)} style={{ zIndex: 9999, position: 'fixed', bottom: 38, right: 17, width: 300 }}>
            <Toast.Header closeButton={false} >
                <img src={logo} className="rounded mr-2" alt="logo" style={{ width: 20, height: 20, marginRight: 20, }} />
                <b className="mr-auto"> NGO Name </b>
            </Toast.Header>
            <Toast.Body> {text} </Toast.Body>
        </Toast>
    )
}

export default Alert