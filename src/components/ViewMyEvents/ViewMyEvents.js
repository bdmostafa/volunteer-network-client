import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './ViewMyEvents.css';

const ViewEvents = () => {
    const { loggedInUser } = useContext(UserContext);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        fetch('https://arcane-inlet-44879.herokuapp.com/view-my-events', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email: loggedInUser.email
            }
        })
            .then(res => res.json())
            .then(event => {
                setMyEvents(event)
            })
    })


    const handleCancelEvent = (id) => {
        fetch('https://arcane-inlet-44879.herokuapp.com/delete-event', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                id: id
            }
        })
            .then(res => res.json())
            .then(result => {
                const updatedEvents = myEvents.filter(event => event._id != id)
                if (result) {
                    setMyEvents(updatedEvents)
                }
            })
    }

    return (
        <div>
            <Header />
            <Container className="registered-event-area">
                <Row>
                    {
                        myEvents && myEvents.map((event, idx) =>
                            <Col md={6}>
                                <div key={idx} className="event-box">
                                    <Row>
                                        <Col sm={12} md={5}>
                                            <Image className="img-fluid" src={`https://arcane-inlet-44879.herokuapp.com/${event.image}`} rounded />
                                        </Col>
                                        <Col sm={12} md={7}>
                                            <h4>{event.title}</h4>
                                            <h5>{event.date}</h5>
                                            <Button
                                                onClick={() => handleCancelEvent(event._id)}
                                            >
                                                Cancel
                                        </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        )
                    }
                </Row>

            </Container>
        </div>
    );
};

export default ViewEvents;