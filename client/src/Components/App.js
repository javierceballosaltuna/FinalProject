import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Component } from 'react'
import AuthService from '../services/auth.service'
import Routes from './routes/Routes'
import Alert from './shared/Alert'
import Navigation from './layout/Navigation'
import './App.css'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      showAlert: false,
      alertText: ''
    }
    this.authService = new AuthService()
  }


  handleAlert(alertText, showAlert = true) {
    this.setState({ showAlert, alertText })
  }

  storeUser = loggedUser => this.setState({ loggedUser })

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.storeUser(response.data))
      .catch(() => this.storeUser(null))

  }

  componentDidMount = () => {
    this.fetchUser()
  }


  render() {

    return (
      (
        <>

          <main style={{ flex: '1' }}>

            <Navigation style={{ marginTop: "10px" }} storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

            <Routes style={{ marginTop: "10px" }} storeUser={this.storeUser} loggedUser={this.state.loggedUser} handleAlert={alertText => this.handleAlert(alertText)} />

            <Alert handleAlert={(alertText, showAlert) => this.handleAlert(alertText, showAlert)} show={this.state.showAlert} text={this.state.alertText} />

          </main>

        </>
      )
    )
  }
}

export default App