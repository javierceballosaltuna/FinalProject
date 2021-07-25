import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CredentialsCard from '../pages/Auth/CredentialsCard'


const Routes = ({ storeUser, loggedUser, handleAlert }) => {

    return (
        <Switch>

            <Route exact path="/signup-teacher" render={props => <CredentialsCard storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            <Route exact path="/signup-student" render={props => <CredentialsCard storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            <Route exact path="/" render={props => <CredentialsCard storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            <Route path="/complete-registration" render={props => <CredentialsCard storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            
            
            {/*
            
            <Route path="/profile"   />
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