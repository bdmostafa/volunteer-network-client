import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import logo from '../../assets/logos/logo.png';
import usersIcon from '../../assets/icons/users-alt 1.png';
import plusIcon from '../../assets/icons/plus 1.png';
import './AdminPanel.css';
import VolunteerList from './VolunteerList';
import AddEvent from './AddEvent';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [showRegisterList, setShowRegisterList] = useState(true);
    const [addEventOption, setAddEventOption] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/all-registered-events')
            .then(res => res.json())
            .then(result => setRegisteredEvents(result))

    }, [])

    const deleteEvent=(id)=>{
        fetch('http://localhost:4000/delete-event',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                id:id
            }
        })
        .then(res=>res.json())
        .then(result=>{
            const updatedEvents = registeredEvents.filter(event => event._id !== id)
            if(result){

                setRegisteredEvents(updatedEvents)
            }
        })
    }
    
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Link to="/home">
                        <img className="w-100" src={logo} alt="" />
                    </Link>
                </Col>
                <Col sm={8}>
                    <h2 style={{ marginTop: '2rem' }}>
                        {showRegisterList
                            ? 'Volunteer Register List'
                            : 'Add Event'
                        }
                    </h2>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={4}>
                    <ul style={{ listStyle: 'none' }}>
                        <li
                            onClick={() => { setShowRegisterList(true); setAddEventOption(false) }}
                        >
                            <img src={usersIcon} alt="" />
                        Volunteer register list
                        </li>
                        <li
                            onClick={() => { setShowRegisterList(false); setAddEventOption(true) }}
                        >
                            <img src={plusIcon} alt="" />
                         Add event
                         </li>
                    </ul>
                </Col>
                <Col className="content-area" sm={8}>
                    {
                        showRegisterList
                            ? <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Registration Date</th>
                                        <th>Volunteer List</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        registeredEvents
                                        && registeredEvents.map((event, idx) =>
                                            <VolunteerList
                                                key={idx}
                                                event={event}
                                                deleteEvent={deleteEvent}
                                            />
                                        )
                                    }
                                </tbody>
                            </Table>
                            : <AddEvent />
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanel;