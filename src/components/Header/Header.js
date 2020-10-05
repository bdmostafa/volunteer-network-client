import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logos/logo.png'
import { UserContext } from '../../App';

const Header = () => {
    const { loggedInUser: { name, email } } = useContext(UserContext);
    const history = useHistory();

    const handleRegisterBtn = () => {
        history.push('/login');
    }

    const handleAdminBtn = () => {
        history.push('/admin');
    }

    return (
        <Container>
            <Navbar bg="inherit" variant="dark" sticky="top" background-color="black">
                <Navbar.Brand>
                    <Link to="/home">
                        <img className="logo-image" src={logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Nav className="ml-auto nav-link d-flex">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/donation">Donation</NavLink>
                    <NavLink to="/viewMyEvents">My Events</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    {
                        name || email
                            ? <h4>{name}</h4>
                            : <>
                                <Button
                                    variant="primary"
                                    onClick={handleRegisterBtn}
                                >
                                    Register
                                </Button>
                            </>
                    }
                    <Button
                        variant="dark"
                        onClick={handleAdminBtn}
                    >
                        Admin
                    </Button>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;