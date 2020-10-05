import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    const history = useHistory();
    const goHome = () => {
        history.push('/')
    }
    return (
        <div className='not-match'>
            <h1>404</h1>
            <p>Oops... Page Not Found!</p>
            <Button 
            onClick={goHome} 
            variant="outline-primary"
            >Go Home</Button>
        </div>
    );
};

export default NoMatch;