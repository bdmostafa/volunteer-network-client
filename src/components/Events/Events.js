import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Events.css'

const Events = (props) => {
    const { title, image } = props.event;
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const history = useHistory();

    const handleEvent = () => {
        setLoggedInUser({...loggedInUser, event: props.event})
        history.push(`/register/${title}`);
    }

    return (
        <div onClick={handleEvent} style={{ width: '25%' }}>
            <Card className="card-style">
                <Card.Img variant="top" src={`https://arcane-inlet-44879.herokuapp.com/${image}`} />
                <h4 className="card-footer"  style={{backgroundColor:`#${Math.floor(Math.random() * 16777215).toString(16)}`}}>
                    {title}
                </h4>
            </Card>
        </div>
    );
};

export default Events;