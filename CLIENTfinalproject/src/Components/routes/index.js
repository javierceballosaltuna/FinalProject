import React from 'react';





const Routes = () => {

    return (
        <Switch>

            {/* AUTH */}
            <Route path="/signup-student" />
            <Route path="/signup-teacher" />
            <Route path="/"   />
            <Route path="/complete-registration"   />
            <Route path="/logout"   />

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
            <Route path="/admin/requests"   />





        </Switch>
    )
}

export default Routes