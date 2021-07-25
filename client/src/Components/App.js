import React from 'react'
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthService from '../services/auth.service'
import Routes from './routes/Routes'
import Alert from './shared/Alert'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedUser: null, showAlert: false, alertText: '' }
    this.authService = new AuthService()
  }


  handleAlert(alertText, showAlert = true) {
    this.setState({ showAlert, alertText })
  }

  storeUser = loggedUser => this.setState({ loggedUser })

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedUser: response.data }))
      .catch(() => this.setState({ loggedUser: undefined }))
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    return (
      (
        <>

          <main style={{ flex: '1' }}>

            <Routes style={{ marginTop: "10px" }} storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} handleAlert={alertText => this.handleAlert(alertText)} />

            <Alert handleAlert={(alertText, showAlert) => this.handleAlert(alertText, showAlert)} show={this.state.showAlert} text={this.state.alertText} />

          </main>

        </>
      )
    )
  }
}

export default App