import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CredentialsCard from '../pages/Auth/CredentialsCard'
import EventsList from '../pages/Events/EventsList'
import EventDetails from '../pages/Events/EventDetails'
import Profile from '../pages/Profile/ProfileView'



const Routes = ({ storeUser, loggedUser, handleAlert }) => {

    return (
        <Switch>

            <Route path="/signup-teacher" render={props => <CredentialsCard history={props.history} handleAlert={handleAlert} />} />
            <Route path="/signup-student" render={props => <CredentialsCard history={props.history} handleAlert={handleAlert} />} />
            <Route exact path="/" render={props => <CredentialsCard history={props.history} handleAlert={handleAlert} />} />
            <Route path="/complete-registration" render={props => <CredentialsCard history={props.history} handleAlert={handleAlert} />} />
            
            <Route exact path="/profile/" render={(props) => <Profile history={props.history} handleAlert={handleAlert} loggedUser={loggedUser} />} />
            
            <Route path="/events/:sessions" render={props => <EventsList {...props} />} />
            <Route path="/events/group-sessions/create" render={() => <EventsList />} />
            <Route path="/events/details/:event_id" render={props => <EventDetails {...props} />} />
            
            {/*
            
            <Route path="/profile/edit"   />
            <Route path="/profile/delete"   />

            <Route path="/subjects"   />
            <Route path="/contact/:teacher_id"   />
            <Route path="/contact/request/approve"   />
            <Route path="/contact/request/decline"   />

            <Route path="/events/group-sessions"   />
            <Route path="/events/group-sessions/create"   />
            <Route path="/events/individual-sessions"   />
            <Route path="/events/:event_id"   />
            <Route path="/events/:event_id/join"   />
            <Route path="/events/:event_id/quit"   />
            <Route path="/events/cancel/:event_id"   />
            <Route path="/events/edit/:event_id"   />

            <Route path="/resources/create"   />
            <Route path="/resources/:material_id/"   />
            <Route path="/resources/delete/:material_id"   />
            <Route path="/resources/edit/:material_id"   />

            <Route path="/admin/users"   />
            <Route path="/admin/events"   />
            <Route path="/admin/teaching-materials"   />
            <Route path="/admin/requests"   /> */}

        </Switch>
    )
}

export default Routes