import React, { Component } from 'react';
import { Row, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllUsers from './AdminAllUsersView';
import AllEvents from './AdminAllEventsView';
import AllteachingMaterials from './AdminAllTeachingMaterialsView';
import AllRequests from './AdminAllRequestsView';

const AdminHome = () => {

    return (

        <>
            <Container>
                <Row >
                    <a href="/admin/users" exact render={() => <AllUsers />}>
                        <article>
                            {/* <img src={allbeers} alt='All Beers' /> */}
                            <h3>All Users</h3>
                            <p>******</p>
                        </article>
                    </a >
                </Row>
                <Row>
                    <a href="/admin/events" render={() => <AllEvents />}>
                        <article>
                            {/* <img src={newbeer} alt='New Beer' /> */}
                            <h3>All Events</h3>
                            <p>******</p>
                        </article>
                    </a>
                </Row>
                <Row>
                    <a href="/admin/teaching-materials/" render={() => <AllteachingMaterials />}>
                        <article>
                            {/* <img src={randombeer} alt='Random Beer' /> */}
                            <h3>All Teaching Materials</h3>
                            <p>******</p>
                        </article>
                    </a >
                </Row>
                <Row>
                    <a href="/admin/requests/" render={() => <AllRequests />}>
                        <article>
                            {/* <img src={randombeer} alt='Random Beer' /> */}
                            <h3>All Requests</h3>
                            <p>******</p>
                        </article>
                    </a >
                </Row>
            </Container>
        </>
    )
}

export default AdminHome