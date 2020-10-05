import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../assets/logos/logo.png';
import './Login.css';
import G from '../../assets/icons/G.png'
import { handleGoogleSignIn, initLoginFramework } from './LoginManager';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {

    // Initialize firebase/login framework
    initLoginFramework();
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser({...loggedInUser, ...res});
                history.replace(from)
            })
    }

    return (
        <div className="login-area">
             <Link to='/'> <img src={logo} alt="" /></Link>
            <div className="login-box">
                <h2>Login</h2>
                <Button
                    onClick={googleSignIn}
                    className="login-btn"
                >
                    <img src={G} alt="" />
                Continue with Google
                </Button>
                Don't have an account? <a href="#">Create an account</a>
            </div>
        </div>
    );
};

export default Login;