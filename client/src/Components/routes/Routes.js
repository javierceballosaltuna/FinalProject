import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CredentialsCard from '../pages/Auth/CredentialsCard'
import EventsList from '../pages/Events/EventsList'
import EventDetails from '../pages/Events/EventDetails'
import Profile from '../pages/Profile/ProfileView'
import CreateEventForm from '../pages/Events/CreateEvent'
import EditEvent from '../pages/Events/EditEvent'
import SubjectsList from '../pages/Subjects/SubjectsList'
import CompleteRegistration from '../pages/Auth/CompleteRegistration'



const Routes = ({ storeUser, loggedUser, handleAlert }) => {



    return (
        <Switch>

            <Route exact path="/" render={props => <CredentialsCard {...props} storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />
            <Route path="/complete-registration" render={props => <CompleteRegistration storeUser={storeUser} history={props.history} handleAlert={handleAlert} />} />

            <Route path="/profile" render={(props) => <Profile history={props.history} handleAlert={handleAlert} loggedUser={loggedUser} storeUser={storeUser}{...props} />} />

            <Route exact path="/events/:sessions" render={props => <EventsList {...props} loggedUser={loggedUser} />} />
            <Route exact path="/events/group-events/create" render={props => <CreateEventForm {...props} />} />
            <Route path="/events/details/:event_id" render={props => <EventDetails loggedUser={loggedUser} {...props} />} />
            <Route path="/events/edit/:event_id" render={props => <EditEvent {...props} />} />

            {/* <Route path="/subjects" render={() => <SubjectsList />}   /> */}
            {/*
            
            <Route path="/profile/edit"   />
            <Route path="/profile/delete"   />

            
            <Route path="/contact/:teacher_id"   />
            <Route path="/contact/request/approve"   />
            <Route path="/contact/request/decline"   />

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